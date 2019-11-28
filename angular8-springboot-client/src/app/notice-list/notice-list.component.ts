import { Observable } from 'rxjs';
import { NoticeService } from '../notice.service';
import { Notice } from '../notice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-notice-list',
    templateUrl: './notice-list.component.html',
    styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {
    notices: Observable<Notice[]>;
    notice: Notice;

    items = [];
    pageOfItems: Array<any>;

    constructor(private noticeService: NoticeService, private router: Router) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {

        this.noticeService.getNoticesList().subscribe(items => {
            this.items = items as Notice[];
        });
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

    deleteNotice(id: number) {
        this.noticeService.deleteNotice(id).subscribe(
            data => {
                console.log(data);
                this.reloadData();
            },
            error => console.log(error)
        );
    }

    addNotice() {
        this.router.navigate(['/add']);
    }

    noticeDetails(id: number) {

        this.noticeService.getNotice(id).subscribe(data => {
            console.log(data);
            this.notice = data;
            if (!this.notice.viewedOn) {
                this.notice.viewedOn = new Date();
                this.noticeService.updateNotice(this.notice.id, this.notice).subscribe(
                    data2 => console.log(data2),
                    error => console.log(error));
            }
            this.router.navigate(['details', id]);
        }, error => console.log(error));
    }

    updateNotice(id: number) {
        this.router.navigate(['update', id]);
    }
}
