import React from 'react'
import '../css/Support.css';

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
export default function Support() {
    return (
        <div>
            <section id="pic">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div class="accordion">
                    <div class="accordion-item">
                        <div class="accordion-item-header">
                            <p>Why my profile list stats won't update?</p>
                        </div>
                        <div class="accordion-item-body">
                            <div class="accordion-item-body-content">
                                <p>Depending on how many users are currently updating their lists, the stats update can take a few minutes or a few hours. Please wait patiently, your stats will update eventually.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-item-header">
                            <p>How can I make my profile private?</p>
                        </div>
                        <div class="accordion-item-body">
                            <div class="accordion-item-body-content">
                                <p>It's not possible. If you don't want others to see personal information don't fill out the fields and use PMs for conversation.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-item-header">
                            <p>How can I change password, email or username?</p>
                        </div>
                        <div class="accordion-item-body">
                            <div class="accordion-item-body-content">
                                <p>You can change your password in settings.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item2">
                        <div class="accordion-item-header2">
                            <p>Don't you found an answer to your problem? Write us your problem through the <a href="/contact">Contact Form</a> and we answer back to you as soon as possible.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}