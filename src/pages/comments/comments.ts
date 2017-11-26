import { Component, ViewChild } from '@angular/core';
import { NavParams, LoadingController, Content } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AuthService } from './../../services/auth.service';

@Component({
  templateUrl: 'comments.html',
  selector: 'page-comments',
})

export class CommentsPage {
  @ViewChild(Content) content: Content;
  eventName: string;
  comments: Array<{ commenterName: string,
    comment: string,
    avatar: string
  }>;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController,
    private authService: AuthService
  ) {
    this.eventName = this.params.data.name;

    //load comments from event
    //this.comments = this.params.data.comments;
    this.comments = [{
      commenterName: 'Woody',
      comment: 'Nice game!',
      avatar: '../../assets/imgs/comments/profile-woody.jpg'
    },
    {
      commenterName: 'Anakin',
      comment: 'This game will be awesome! Go Canada!',
      avatar: '../../assets/imgs/comments/profile-anakin.jpg'
    },
    {
      commenterName: 'Legolas',
      comment: 'Yeeeaaahhh really excited!',
      avatar: '../../assets/imgs/comments/profile-legolas.jpg'
    },
    {
      commenterName: 'Yoda',
      comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.',
      avatar: '../../assets/imgs/comments/profile-yoda.jpg'
    },
    {
      commenterName: 'Woody',
      comment: 'This game will be awesome! Go Canada!',
      avatar: '../../assets/imgs/comments/profile-woody.jpg'
    },
    {
      commenterName: 'Anakin',
      comment: 'Yeeeaaahhh really excited!',
      avatar: '../../assets/imgs/comments/profile-anakin.jpg'
    },
    {
      commenterName: 'Legolas',
      comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.',
      avatar: '../../assets/imgs/comments/profile-legolas.jpg'
    },
    {
      commenterName: 'Woody',
      comment: 'This game will be awesome! Go Canada!',
      avatar: '../../assets/imgs/comments/profile-woody.jpg'
    },
    {
      commenterName: 'Anakin',
      comment: 'Yeeeaaahhh really excited!',
      avatar: '../../assets/imgs/comments/profile-anakin.jpg'
    }];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sendComment(f: FormControl) {
    let load = this.handleLoading();
    load.present();
    this.comments.push({ 
      commenterName: this.authService.getActiveUser().email,
      comment: f.value.comment,
      avatar: '../../assets/imgs/comments/profile-vanhack.jpg'
    });
    load.dismiss();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    })
  }

  handleLoading() {
    return this.loadCtrl.create({
      content: "Wait..."
    });
  }
}
