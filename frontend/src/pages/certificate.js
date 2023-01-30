import { useEffect, useState } from "react";
import axios from "axios";
import AllCourses from "../components/courses/CourseList";
import '../components/certificate.css'
import { Button } from "@mui/material";
import JsPDF from 'jspdf';
function Certificate() {
    const [courses, setCourses] = useState([]);
    const generatePDF = () => {

        const report = new JsPDF('landscape', 'px', 'a2', false);
        report.html(document.querySelector('.certificate-wrapper')).then(() => {
            report.save('report.pdf');
        });
    }



    return (
        <>

            <head>
                <title>Certificate of Training</title>

            </head>
            <body className="body-certt">
                <div class="content">
                    <div class="certificate-wrapper frame">
                        <div class="certificate">
                            <div class="certificate__header">
                                <div class="certificate__title title-decoration">
                                    <span class="title-decoration__main">Certificate</span>
                                    <span class="title-decoration__sub">of Completion</span>
                                </div>
                            </div>
                            <div class="certificate__body">
                                <div class="certificate__description">This is to certify that</div>
                                <div class="certificate__recipient-name">[NAME]</div>
                                <div class="certificate__description">has successfully completed [COURSE DESCRIPTION]</div>
                                <div class="ribbon certificate__content">[COURSE NAME]</div>
                                <div class="certificate__description">[COURSE DETAILS] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum sed dui vel vestibulum. Phasellus ornare, est et congue auctor, nulla quam luctus est, et mattis quam velit rhoncus dui.</div>
                            </div>
                            <div class="certificate__footer">
                                <div class="certificate__date entry-column"><span class="entry-column__input"><time datetime="1970-01-01">[DATE]</time>.</span><span class="entry-column__label">completed on </span></div>
                                <div class="certificate__signature entry-column"><span class="entry-column__input">[NAME]</span><span class="entry-column__label">signature </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <Button onClick={generatePDF} > Download as PDF</Button>
        </>

    );
}

export default Certificate;
