import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Subscription} from "rxjs";
import gql from "graphql-tag";

const MainPage = gql `
    {
        aboutMe(id: "/about_mes/1"){
            text
            quote
        }
        skills{
            edges{
                node{
                    title
                    value
                }
            }
        }
        experiences{
            edges{
                node{
                    date
                    function
                    company
                    companyUrl
                    description
                }
            }
        }
        stacks{
            edges{
                node{
                    title
                    url
                    contentUrl
                }
            }
        }
        projects{
            edges{
                node{
                    _id
                    id
                    title
                    description
                    keys
                    createdAt
                    category{
                        edges{
                            node{
                                title
                            }
                        }
                    }
                    client{
                        name
                    }
                    contentUrl
                }
            }
        }
        clients{
            edges{
                node{
                    name
                    homepage
                    contentUrl
                    cssClass
                }
            }
        }
    }
`;

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class Home implements OnInit, OnDestroy {

    loading: boolean;
    companies: {path: string, link: string, class?: string[]}[] = [];
    icons: {path: string, link: string}[] = [];
    private querySubscription: Subscription;



    constructor(private apollo: Apollo) {
    }

    ngOnInit() {
        this.querySubscription = this.apollo.watchQuery<any>({
            query: MainPage
        })
            .valueChanges
            .subscribe(({ data, loading }) => {
                this.loading = loading;
                console.log(data);
            });
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }


}
