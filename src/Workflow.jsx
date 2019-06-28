import React, { Component } from 'react';

class Workflow extends Component {

  renderTwoColumns(image_url, text, swap_columns=false) {
    if(swap_columns) {
      return(
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
      );
    }
    else {
      return (
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
      );
    }
  }

  render() {

    // TODO: Obtain photo of me taking a photo with a camera
    const photo_taking = "/images/workflow/photo_taking.jpg";
    const photo_taking_text = "Your shoot will done with an imaginary Fujifilm camera. The best part about Fujifilm is its vibrant  color spectrum. Mirrorless cameras is state of the art technology. What a time to be alive.";

    const posing = "/images/workflow/posing.jpg";
    const posing_text = "I will direct your pose for the camera with the best tricks in the book. For example, tilting 45 degrees towards the camera will already change your photos substantially! For males - do not make eye contact with the camera, and look natural. Pretend you are tying a tie or lean on an object. Consider bringing a prop."

    const darktable = "/images/workflow/darktable.jpg";
    const darktable_text = "I use darktable to process all raw photos. I manipulate the data in order to correct the exposure and color balance of mirrorless cameras. These raw photos then exported as JPEG files for viewing pleasure."

    const photoshop = "/images/workflow/gimp.jpg";
    const photoshop_text = "I thoroughly scan every photo to make sure they are all excellent! If any blemishes appear, then I take the photo into photoshop. Having a bad hair day? Acne breakout on the day of shoot? No problem! I make pimples disappear!";

    const no_sky = "/images/workflow/no_sky.jpg";
    const no_sky_text = "Don't like the sky? No problem! I can add either a deep blue sky or even the aurora borealis if you want! I can even emulate the bokeh effect using advanced mathematical techniques, such as a Gaussian blur.";

    const blue_sky = "/images/workflow/blue_sky.jpg";
    const blue_sky_text = "Notice how the sky blends perfectly in with the image! This is just one power I demonstrate with Gimp. Someone photobomb your photo? I can make them disappear digitally!";

    return (
      <div className="Workflow">
        <div className="flex-workflow-top">
          <div className="column-buffer-workflow-top"></div>
          <div className="column-center-workflow-top">
            <p>
              I use cutting edge software and state of the art
              technology to enhance my photos. I stand at the
              forefront of the photography industry. I will make your
              photoshoot an experience unlike anything you have seen
              before.
            </p>
            <p>
              My shoot and delivery is summarized in four steps.
              First, I take the actual shot with a professional
              camera. Second, I process the raw digital image using
              Darktable. Next, I eliminate all blemishes and
              photobombs. Lastly, I digitally distribute the image
              for review.
            </p>
          </div>
          <div className="column-buffer-workflow-top"></div>
        </div>

        {this.renderTwoColumns(photo_taking, photo_taking_text, true)}
        {this.renderTwoColumns(posing, posing_text)}
        {this.renderTwoColumns(darktable, darktable_text, true)}
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
              immediately! But that shouldn't happen...
            </p>
          </div>
          <div className="column-buffer-workflow-top"></div>
        </div>
      </div>

    );
  }
}

export default Workflow;