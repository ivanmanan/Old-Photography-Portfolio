import React, { Component } from 'react';

/*
   specs:
   Workflow - talk about what distinguishes me to other photograpers;
   raw image taken, then processed with Darktable, then GIMP photoshop
   for finishing touches - can provide manual possibly
   --> how to fix blemishes and other photobombs
   --> can show comparison of graduation photo between before and
   after at Janss Steps

   TODO: Obtain photo of me taking a shot with my camera
 */

class Workflow extends Component {
  render() {
    return (

      <div className="Workflow">

        <div className="flex-workflow-top">
          <div className="column-buffer-workflow-top"></div>
          <div className="column-center-workflow-top">
            <p>I use cutting edge software and state of the art  technology to enhance my photos. I am sitting at the forefront of the photography industry. I will make your photoshoot an experience unlike anything you have seen before.</p>

            <br/>

            <p>
              My photoshoot and delivery is summarized in four steps. First, I take the actual shot with a professional camera. Second, I process the photo using Darktable. Next, I eliminate all blemishes and photobombs. Lastly, I digitally distribute the image to you for review.
            </p>
          </div>
          <div className="column-buffer-workflow-top"></div>
        </div>

        <div className="flex-workflow-darktable">
          <div className="column-image">

          </div>

          <div>


          </div>
        </div>

        <p>Don't like the sky? No problem! I can fix that too!</p>
        <p>We can add the aurora borealis if you want!</p>


        <p>Someone photobombed your photo? I can fix that too!</p>
        <p>Emulate the bokeh effect using Gaussian blur</p>


        <div className="Footer">

        </div>
      </div>

    );
  }
}

export default Workflow;