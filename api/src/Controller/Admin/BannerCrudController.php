<?php

namespace App\Controller\Admin;

use App\Entity\Banner;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class BannerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Banner::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $fields = [
            TextField::new('title')
        ];

        if ($pageName === Crud::PAGE_EDIT || $pageName === Crud::PAGE_NEW ){
            $fields []  = ImageField::new('pathFile')->setFormType(VichFileType::class);
        } else{
            $fields []  = ImageField::new('path')->setBasePath('/images');
        }

        return $fields;
    }
}
