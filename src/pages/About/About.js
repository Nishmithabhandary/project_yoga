import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    We created this as a our final year project, and we have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model to predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so we converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About Developers</h4>
                    <p className="about-content">Nishmitha: Full Stack Developer, AI Enthusiastic, Yoga practicitioner, love to work with cutting edge technologies.
                    </p>

                    <p className="about-content">Aditi Bhat: Full Stack Developer, AI Enthusiastic, Yoga practicitioner, love to work with cutting edge technologies.</p>
                    <h4>Contact</h4>
                    <a href="https://www.linkedin.com/in/nishmitha-bhandary-59065b221/"><p className="about-content">Nishmitha</p></a>
                    <a href="https://www.linkedin.com/in/aditi-bhat-850b56208/"><p className="about-content">Aditi Bhat</p></a>
                </div>
            </div>
        </div>
    )
}
