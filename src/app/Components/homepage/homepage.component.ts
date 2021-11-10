import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  experiences: any = true
  lifestyle: any = true
  wellness: any = true
  experiencesVideo: any = false
  lifestylevideo: any = false
  wellnessvideo: any = false
  public show:boolean = false;
  public buttonName:any = 'Show';
    div1:boolean=true;
    div2:boolean=false;
    div3:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // images: any = [
  //   'https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg',
  //   'https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg',
  //   'https://dxaurk9yhilm4.cloudfront.net/images/211/Summit-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg',
  // ];
  onExperiences() {
    this.experiences = false
    this.experiencesVideo = true
  }
  onLifestyle() {
    this.lifestyle = false
    this.lifestylevideo = true
  }
  onWellness() {
    this.wellness = false
    this.wellnessvideo = true
  }
  // toggle() {
  //   this.show = !this.show;
  // }
//   div1Function(){
//     this.div1=true;
//     this.div2=false;
//     this.div3=false
// }

// div2Function(){
//     this.div2=true;
//     this.div1=false;
//     this.div3=false
// }

// div3Function(){
//     this.div3=true;
//     this.div2=false;
//     this.div1=false
// }
expvideoclose(){
  this.experiencesVideo=false
  this.experiences=true
  this.lifestyle=true
  this.wellness=true
}
lifestyleclosevideo(){
  this.lifestylevideo=false
  this.experiences=true
  this.lifestyle=true
  this.wellness=true
}
wellnessclosevideo(){
  this.wellnessvideo=false
  this.experiences=true
  this.lifestyle=true
  this.wellness=true
}
onExplore(){
  this.router.navigateByUrl('/experiences')
  }

  onlifestyleexplore(){
    this.router.navigateByUrl('/aboutdlc')
  }
  onwellnessexplore(){
    this.router.navigateByUrl('/')
  }
}
