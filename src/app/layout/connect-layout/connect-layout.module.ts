import { PostFeedbackService } from '../../getjobs-connect/docker/post-details/post-feedback.service';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule,  } from '@angular/router'

import { connectLayoutRoutes } from './connect-layout.routes';

import {FormsModule} from '@angular/forms';
import { SideHeaderComponent } from '../../getjobs-connect/side-header/side-header.component';
import { DockerComponent } from '../../getjobs-connect/docker/docker.component';
import { PostsComponent } from '../../getjobs-connect/docker/posts/posts.component';
import { WritePostComponent } from '../../getjobs-connect/docker/posts/write-post/write-post.component';
import { ShowPostComponent } from '../../getjobs-connect/docker/posts/show-post/show-post.component';
import { PostListComponent } from '../../getjobs-connect/docker/posts/show-post/post-list/post-list.component';
import { PostItemComponent } from '../../getjobs-connect/docker/posts/show-post/post-list/post-item/post-item.component';
import { PostServices } from '../../getjobs-connect/docker/posts/posts.service';
import { PostDetailsComponent } from '../../getjobs-connect/docker/post-details/post-details.component';
import {ShortenPipe} from '../../getjobs-connect/pipes/shorten.pipe';
import { DiscussionsComponent } from '../../getjobs-connect/discussions/discussions.component';
import { ProfileComponent } from '../../getjobs-connect/profile/profile.component';
import { SettingsComponent } from '../../getjobs-connect/settings/settings.component';
import { TopicComponent } from '../../getjobs-connect/discussions/topic/topic.component';
import { TopicDetailsComponent } from '../../getjobs-connect/discussions/topic/topic-details/topic-details.component';
import { ShowTopicComponent } from '../../getjobs-connect/discussions/topic/show-topic/show-topic.component';
import { WriteTopicComponent } from '../../getjobs-connect/discussions/topic/write-topic/write-topic.component';
import { TopicListComponent } from '../../getjobs-connect/discussions/topic/show-topic/topic-list/topic-list.component';
import { TopicItemComponent } from '../../getjobs-connect/discussions/topic/show-topic/topic-list/topic-item/topic-item.component';
import { TopicService } from '../../getjobs-connect/discussions/topic/topic.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticateService} from '../../getjobs-connect/authenticate/authenticate.service';
import {AuthenticateGuard} from '../../getjobs-connect/guards/authenticate.guard';
import { AboutComponent } from '../../getjobs-connect/profile/about/about.component';
import { FriendsComponent } from '../../getjobs-connect/profile/friends/friends.component';
import { PhotosComponent } from '../../getjobs-connect/profile/photos/photos.component';
import { ProfilePostsComponent } from '../../getjobs-connect/profile/profile-posts/profile-posts.component';
import { ProfileService } from '../../getjobs-connect/profile/profile.service';
import { SearchComponent } from '../../getjobs-connect/search/search.component';
import { GroupChatComponent } from '../../getjobs-connect/group-chat/group-chat.component';
import { ChatComponent } from '../../getjobs-connect/private-chat/chat.component';


@NgModule({
  declarations: [
    SideHeaderComponent,
    DockerComponent,
    PostsComponent,
    WritePostComponent,
    ShowPostComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailsComponent,
    ShortenPipe,
    DiscussionsComponent,
    ProfileComponent,
    SettingsComponent,
    TopicComponent,
    TopicDetailsComponent,
    ShowTopicComponent,
    WriteTopicComponent,
    TopicListComponent,
    TopicItemComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    ProfilePostsComponent,
    SearchComponent,
    GroupChatComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(connectLayoutRoutes)

  ],
  providers: [ AuthenticateService,
              AuthenticateGuard,
              PostServices,
              TopicService,
              ProfileService,
              PostFeedbackService,
            ],
})
export class ConnectLayoutModule { }
