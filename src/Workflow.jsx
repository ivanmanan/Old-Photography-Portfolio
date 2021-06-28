import React, { Component } from 'react';

class Workflow extends Component {

  renderTwoColumns(image_url, text, swap_columns=false) {
    if(swap_columns) {
      return(
        <div className="workflow-gradient">
          <div className="flex-workflow-row">
            <div className="column-buffer-workflow"/>
            <div className="column-workflow-content">
              <img src={image_url} alt=""/>
            </div>
            <div className="column-buffer-center"/>
            <div className="column-workflow-content">
              <p>
                {text}
              </p>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="workflow-gradient-alternate">
          <div className="flex-workflow-row">

            <div className="column-buffer-workflow"/>
            <div className="column-workflow-content">
              <p>{text}</p>
            </div>
            <div className="column-buffer-center"/>
            <div className="column-workflow-content">
              <img src={image_url} alt=""/>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {

    const photo_taking = "/images/workflow/photo_taking.jpg";
    const photo_taking_text = "Your shoot will be done with an imaginary Fujifilm camera. The centerpiece of Fujifilm is its vibrant color spectrum. Mirrorless cameras are state of the art technology. This is truly a great time to be alive.";

    const posing = "/images/workflow/posing.jpg";
    const posing_text = "I will direct your posing for the camera using the best tricks in the book. For example, tilting 45 degrees towards the camera will already transform your photos! For males - do not make eye contact with the camera, and look natural. Work with props or lean on an object."

    const luminar = "/images/workflow/luminar.jpg";
    const luminar_text = "I use Luminar AI 4 to process all raw photos. I manipulate the data in order to correct both the exposure and color balance. These raw photos are then exported as JPEG files for viewing pleasure."

    const photoshop = "/images/workflow/gimp.jpg";
    const photoshop_text = "I thoroughly scan every photo to make sure they are all excellent! If any blemishes appear, then I immediatley remove the blemish using GIMP. Have a bad hair day? Acne breakout on the day of shoot? No problem! I make pimples disappear!";

    const no_sky = "/images/workflow/no_sky.jpg";
    const no_sky_text = "Don't like the sky? I can fix that too! I can add a deep blue sky or the aurora borealis if you want! I can even emulate the bokeh effect using advanced mathematical techniques, such as a Gaussian blur.";

    const blue_sky = "/images/workflow/blue_sky.jpg";
    const blue_sky_text = "Notice how the sky blends perfectly in with the image! This is just one power I demonstrate with Gimp. Someone photobomb your photo? I can make them vanish instantly!";

    return (
      <div className="Workflow">
        <div className="flex-workflow-top">
          <div className="column-buffer-workflow-top"></div>
          <div className="column-center-workflow-top">
            <p>
              I use cutting edge software and state of the art
              technology to enhance my photos. I stand at the
              forefront of the photography industry. I will make your
              shoot an experience unlike anything you have witnessed
              before.
            </p>
            <p>
              My shoot and delivery is summarized in four steps.
              First, I take the actual shot with a professional
              camera. Second, I process the raw digital image using
              Luminar AI 4. Next, I eliminate all blemishes and
              photobombs. Lastly, I distribute the image
              for digital review.
            </p>
          </div>
          <div className="column-buffer-workflow-top"></div>
        </div>

        {this.renderTwoColumns(photo_taking, photo_taking_text, true)}
        {this.renderTwoColumns(posing, posing_text)}
        {this.renderTwoColumns(luminar, luminar_text, true)}
        {this.renderTwoColumns(photoshop, photoshop_text)}
        {this.renderTwoColumns(no_sky, no_sky_text, true)}
        {this.renderTwoColumns(blue_sky, blue_sky_text)}

        <div className="flex-workflow-bottom">
          <div className="column-buffer-workflow-top"></div>
          <div className="column-center-workflow-top">
            <p>
              Last comes the distribution of the photos. You can
              review all the photos to your liking. If you spot
              anything unwanted, just let me know and I will fix it
              immediately! But unsatisfaction is rare.
            </p>
          </div>
          <div className="column-buffer-workflow-top"></div>
        </div>
      </div>

    );
  }
}

export default Workflow;