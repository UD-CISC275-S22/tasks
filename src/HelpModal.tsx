import React from "react";

interface HelpModalProps {
    show: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modalBackground">
            <div className="modalContent">
                {children}
                <p className="HelpTitle">How To Use The UDel Course Planner:</p>
                <p></p>
                <p className="HelpStep">
                    1. Select A Course From the Course Catalog
                </p>
                <p>
                    You are able to search for any given course by clicking on
                    the search bar and typing in the course you want to find
                </p>
                <img
                    src={require("./images/CC.png")}
                    width="500"
                    height="175"
                ></img>
                <p></p>
                <p className="HelpStep">
                    2. The Courses Will Appear In The Course Queue
                </p>
                <p>
                    Clicking the remove button next to the courses will remove
                    them from your queue
                </p>
                <img
                    src={require("./images/CTA.png")}
                    width="400"
                    height="175"
                ></img>
                <p></p>
                <p className="HelpStep">
                    3. Click The AddQueue Button On The Semester You Want To Add
                    The Selected Courses To
                </p>
                <p>
                    The clear semester button will delete all courses from the
                    semester
                </p>
                <p>The remove button will remove the semester entirely</p>
                <p>
                    Lastly, the delete button next to the added courses will
                    only delete that specific course
                </p>
                <img
                    src={require("./images/SV.png")}
                    width="400"
                    height="250"
                ></img>
                <p></p>
                <p className="HelpStep">4. Check If All Requirements Are Met</p>
                <p>
                    You will find the degree requirement section updating as
                    more courses are added
                </p>
                <p>
                    The degree requirements will check if your plan meets all
                    requirments for the CS major at UDel
                </p>
                <p>
                    Any courses that have prereqs will be shown in the course
                    catalog, you will also recive a popup message after adding
                    one to your plan
                </p>
                <img
                    src={require("./images/PR.png")}
                    width="400"
                    height="175"
                ></img>
                <img
                    src={require("./images/DR.png")}
                    width="550"
                    height="300"
                ></img>
                <p></p>
                <p className="HelpStep">
                    5. After Creating Your Plan, Save As A CSV File And Import
                    The File Later If Needed
                </p>
                <p>
                    Name your plan under the Name: text and click export to CSV
                </p>
                <img
                    src={require("./images/CSV1.png")}
                    width="550"
                    height="150"
                ></img>
                <p></p>
                <p>
                    A file should be saved to your computer, then select the
                    choose file button and select the CSV file you exported
                </p>
                <img
                    src={require("./images/CSV2.png")}
                    width="200"
                    height="75"
                ></img>
                <p>
                    Now you should be able to view, edit and delete course plans
                    imported by CSV after clicking on the view course plans
                    button. This button will switch between saved course plans
                    and the plan creator
                </p>
                <img
                    src={require("./images/CSV3.png")}
                    width="400"
                    height="150"
                ></img>
                <p></p>
                <p className="HelpStep">6. Edit Courses</p>
                <p>
                    You are able to edit a added course by simply clicking on
                    the course you would like to edit. Doing so will bring up
                    this screen where you can edit all the information attached
                    to a given course
                </p>
                <img
                    src={require("./images/EC.png")}
                    width="500"
                    height="300"
                ></img>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default HelpModal;
