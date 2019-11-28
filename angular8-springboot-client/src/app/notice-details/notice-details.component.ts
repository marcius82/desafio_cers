import { Notice } from '../notice';
import { Component, OnInit, Input } from '@angular/core';
import { NoticeService } from '../notice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-details',
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css']
})
export class NoticeDetailsComponent implements OnInit {

  id: number;
  notice: Notice;

  constructor(private route: ActivatedRoute,private router: Router, private noticeService: NoticeService) { }

  ngOnInit() {
    this.notice = new Notice();

    this.id = this.route.snapshot.params.id;

    this.noticeService.getNotice(this.id).subscribe(data => {
        console.log(data)
        this.notice = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['notices']);
  }

  deleteNotice(id: number) {
    this.noticeService.deleteNotice(id).subscribe(
        data => {
            console.log(data);
            this.list();
        },
        error => console.log(error)
    );
  }

  updateNotice(id: number) {
    this.router.navigate(['update', id]);
  }
}
