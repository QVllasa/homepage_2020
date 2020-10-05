import {Component, NgZone, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Subscription} from "rxjs";
import {
    IAboutMe, IClient,
    IExperience,
    IMainPage,
    IProfileImage, IProject, IService,
    ISkill,
    IStack,
    Models
} from "../../models/models";
import {
    aboutMe,
    clients,
    experiences,
    profileImg, projects, skills, stacks,
    typeWriterText
} from "../../../static/data";
import {BASE_PATH} from "../../../environments/environment";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    activeTab: 'top-skills' | 'experience' | 'education';

    isLoading: boolean;
    query = Models;

    typeWriterText = typeWriterText;

    aboutMe: IAboutMe = aboutMe;
    profileImg: IProfileImage = profileImg;
    experiences: IExperience[] = [];
    clients: IClient[] = [];
    stacks: IStack[] = [];
    skills: ISkill[] = [];
    services: IService[] = [];
    projects: IProject[] = [];

    serverPath = BASE_PATH;

    private querySubscription: Subscription;

    constructor(private apollo: Apollo,
                public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.activeTab = 'top-skills';
        this.isLoading = true;
        this.querySubscription = this.apollo.watchQuery<IMainPage>({query: this.query}).valueChanges
            .subscribe(({data, error, loading}) => {
                this.aboutMe = data.aboutMe;
                this.experiences = [];
                this.skills = [];
                this.stacks = [];
                this.clients = [];
                this.projects = [];
                this.services = [];

                for (let exp of data.experiences.edges){
                    this.experiences.push(exp.node)
                }

                for (let skill of data.skills.edges){
                    this.skills.push(skill.node);
                }

                for (let stack of data.stacks.edges){
                    this.stacks.push(stack.node);
                }

                for (let company of data.clients.edges){
                    this.clients.push(company.node);
                }

                for (let service of data.services.edges){
                    this.services.push(service.node);
                }

                this.services = this.services.sort((a, b) => a.priority - b.priority);

                for (let project of data.projects.edges){
                    this.projects.push(project.node)
                }

                this.isLoading = loading;
                if (error){
                    console.log(error);
                }
            });
    }

    onToggleTabs(tab) {
        this.activeTab = tab;
    }

    openDialog() {
        const dialogRef = this.dialog.open(ContactDialogComponent,
            {
                width: 'auto',
                panelClass: 'custom-dialog-container',
                backdropClass: ''
            }
        );

        dialogRef.afterClosed().subscribe();

    }


}

@Component({
    selector: 'app-contact-dialog',
    templateUrl: './contact-dialog.component.html'
})
export class ContactDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close(true);
    }
}


