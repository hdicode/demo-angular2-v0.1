import {Component} from '@angular/core';
import {TimelineService} from './timeline.service';

@Component({
    template: `
        <div>
            <div class="media" *ngFor="let timeline of timelines">
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
export class Timelines2Component {
    timelines: any[];
    
    constructor(timelineService: TimelineService){
        this.timelines = timelineService.getTimeline();
    }
}