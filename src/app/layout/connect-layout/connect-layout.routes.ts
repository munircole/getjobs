import { DockerComponent } from '../../getjobs-connect/docker/docker.component';
import { PostDetailsComponent } from '../../getjobs-connect/docker/post-details/post-details.component';
import { DiscussionsComponent } from '../../getjobs-connect/discussions/discussions.component';
import { ShowTopicComponent } from '../../getjobs-connect/discussions/topic/show-topic/show-topic.component';
import { WriteTopicComponent } from '../../getjobs-connect/discussions/topic/write-topic/write-topic.component';
import { TopicDetailsComponent } from '../../getjobs-connect/discussions/topic/topic-details/topic-details.component';
import { TopicComponent } from '../../getjobs-connect/discussions/topic/topic.component';
import {TopicListComponent} from '../../getjobs-connect/discussions/topic/show-topic/topic-list/topic-list.component';
import {AuthenticateGuard} from '../../getjobs-connect/guards/authenticate.guard';
import { ProfileComponent } from '../../getjobs-connect/profile/profile.component';
import { AboutComponent } from '../../getjobs-connect/profile/about/about.component';
import { ProfilePostsComponent } from '../../getjobs-connect/profile/profile-posts/profile-posts.component';
import { FriendsComponent } from '../../getjobs-connect/profile/friends/friends.component';
import { PhotosComponent } from '../../getjobs-connect/profile/photos/photos.component';
import { WritePostComponent } from '../../getjobs-connect/docker/posts/write-post/write-post.component';
import { SearchComponent } from '../../getjobs-connect/search/search.component';



export const connectLayoutRoutes = [
  { path: '', component: DockerComponent, children: [
      {path: 'createpost', component: WritePostComponent},
      {path: ':id', component: PostDetailsComponent}
    ], 
  },
  { path: 'discussions', component: DiscussionsComponent, children: [
      {path: '', component: TopicComponent, children: [
        {path: 'newtopic', component: WriteTopicComponent},
        {path: 'topic/:id', component: TopicDetailsComponent},
        {path: 'topics', component: ShowTopicComponent, children: [
            {path: ':topic', component: TopicListComponent}
          ]}
      ]}
    ], 
  },
  {  path: 'profile', component: ProfileComponent, children: [
        {path: 'posts', component: ProfilePostsComponent},
        {path: 'about', component: AboutComponent},
        {path: 'friends', component: FriendsComponent},
        {path: 'photos', component: PhotosComponent}
    ], 
  },
  {
    path: 'search/:searchString', component: SearchComponent
  },
];

