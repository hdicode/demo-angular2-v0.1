import {Component} from '@angular/core';
import {TimelineService} from './timeline.service';

@Component({
    template: `
        <div>
            <div class="media" *ngFor="let timeline of timelines">
                <div class="media-left">
                    <a href="#">
                    <img class="media-object" src="http://placehold.it/100x100">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">
                        <span>{{ timeline.id }}</span><span class="dem-author">{{ timeline.user.username }}</span>
                    </h4>
                    {{ timeline.title }}
                </div>
            </div>   
        </div>
    `,
    providers: [TimelineService]
})
export class TimelinesComponent {
    timelines: any[];
    
    constructor(timelineService: TimelineService){
        this.timelines = timelineService.getTimeline();
    }
}