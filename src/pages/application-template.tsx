import { FunctionComponent } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Switch,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./application-template.css";

const ApplicationTemplate: FunctionComponent = () => {
  return (
    <div className="application-template">
      <div className="application-template-child" />
      <div className="rectangle-parent">
        <Button
          className="group-child"
          sx={{ width: 59 }}
          color="success"
          variant="contained"
        >
          Save
        </Button>

      </div>
      <button><img className="application-template-item" alt="" src="/group-477.svg" /></button>
      <div className="value"><a href="/" style={{textDecoration:"none",color:"red"}}>Delete question</a></div>
      <button>
      <img
        className="icons-paragraph-unorderedl"
        alt=""
        src="/icons--paragraph--unorderedlist.svg"
      />
      </button>
      <div className="question">Question</div>
      <div className="choice">Choice</div>
      <div className="application-template-inner" />
      <div className="rectangle-div" />
        <TextField
          className="type-here"
          color="primary"
          label="Type here"
          sx={{ width: 176 }}
          variant="standard"
        />
      <TextField
        className="type-here1"
        color="primary"
        label="Type here"
        sx={{ width: 176 }}
        variant="standard"
      />
      <button><img className="group-icon" alt="" src="/group-476.svg" /></button>
      <div className="application-template-child1" />
      <div className="value1"><a href="/" style={{textDecoration:"none",color:"black"}}>Add a question</a></div>
      <button>
      <img
        className="application-template-child2"
        alt=""
        src="/group-660.svg"
      />
      </button>
      <div className="application-template-child3" />
      <div className="application-template-child4" />
      <div className="toggle">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
    
      </div>
      <div className="toggle1">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
        
      </div>
      <div className="toggle2">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
        
      </div>
      <div className="line-div" />
      <div className="application-template-child5" />
      <TextField
        className="education"
        color="primary"
        label="Education"
        sx={{ width: 202 }}
        variant="standard"
      />
      <div className="application-template-child6" />
      <div className="application-template-child7" />
      <div className="please-tell-me">
        Please tell me about yourself in less than 500 words
      </div>
      <div className="profile">Profile</div>
      <div className="additional-questions">Additional questions</div>
      <TextField
        className="experience"
        color="primary"
        label="Experience"
        sx={{ width: 191 }}
        variant="standard"
      />
      <TextField
        className="resume"
        color="primary"
        label="Resume"
        sx={{ width: 191 }}
        variant="standard"
      />
    
      <FormControlLabel
        className="group-formcontrollabel"
        label="Mandatory"
        control={<Checkbox color="success" />}
      />
      <FormControlLabel
        className="rectangle-formcontrollabel"
        label="Mandatory"
        control={<Checkbox color="success" />}
      />
      <FormControlLabel
        className="application-template-child8"
        label="Mandatory"
        control={<Checkbox color="success" />}
      />
      <div className="paragraph">Paragraph</div>
      <div className="please-select-the">
        Please select the year of graduation from the list below
      </div>
      <div className="dropdown">Dropdown</div>
      <img className="image-156-icon" alt="" src="/image-156@2x.png" />
      <TextField
        className="have-you-ever"
        color="primary"
        label="Have you ever been rejected by the UK embassy?"
        sx={{ width: 439 }}
        variant="standard"
      />
      <div className="yesno-questions">Yes/No questions</div>
      <img className="image-240-icon" alt="" src="/image-156@2x.png" />
      <img className="image-239-icon" alt="" src="/image-156@2x.png" />
      <div className="application-template-child9" />
      <div className="vector-parent">
        <img className="group-item" alt="" src="/vector-55.svg" />
        <div className="group-inner" />
      </div>
      <img className="vector-icon" alt="" src="/vector-292.svg" />
      <div className="program-details">Program Details</div>
      <div className="application-form">Application Form</div>
      <div className="workflow">Workflow</div>
      <div className="preview">Preview</div>
      <div className="value5"><a href="/" style={{textDecoration:"none",color:"black"}}>Add a question</a></div>
      <button><img
        className="application-template-child10"
        alt=""
        src="/group-319.svg"
      /></button>
      <div className="rectangle-group">
        <div className="group-child1" />
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="group-child3" />
          <div className="group-child4" />
        </div>
        <button><img className="image-295-icon" alt="" src="/image-295@2x.png" /></button>
        <button><img className="image-298-icon" alt="" src="/image-298@2x.png" /></button>
        <div className="ellipse-div" />
        <div className="nt">NT</div>
      </div>
      <div className="application-template-child11" />
      <div className="application-template-child12" />
      <div className="personal-information">Personal Information</div>
      <div className="search" />
      <div className="value6"><a href="/" style={{textDecoration:"none",color:"black"}}>Add a question</a></div>
      <button><img
        className="application-template-child13"
        alt=""
        src="/group-653.svg"
      /></button>
      <div className="toggle3">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
       
      </div>
      <div className="application-template-child14" />
      <div className="application-template-child15" />
      <TextField
        className="first-name"
        color="primary"
        label="First Name"
        sx={{ width: 202 }}
        variant="standard"
      />
      <div className="application-template-child16" />
      <TextField
        className="last-name"
        color="primary"
        label="Last Name"
        sx={{ width: 202 }}
        variant="standard"
      />
      <TextField
        className="emai"
        color="primary"
        label="Email"
        sx={{ width: 191 }}
        variant="standard"
      />
      <TextField
        className="phone-without-dial"
        color="primary"
        label="Phone (without dial code)"
        sx={{ width: 230 }}
        variant="standard"
      />
     
      <FormControlLabel
        className="application-template-child17"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="toggle4">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
 
      </div>
      <div className="application-template-child18" />
      <TextField
        className="nationality"
        color="primary"
        label="Nationality"
        sx={{ width: 230 }}
        variant="standard"
      />
  
      <FormControlLabel
        className="application-template-child19"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="toggle5">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
     
      </div>
      <div className="application-template-child20" />
      <TextField
        className="current-residence"
        color="primary"
        label="Current Residence "
        sx={{ width: 230 }}
        variant="standard"
      />
     
      <FormControlLabel
        className="application-template-child21"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="toggle6">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
       
      </div>
      <div className="application-template-child22" />
      <TextField
        className="id-number"
        color="primary"
        label="ID Number"
        sx={{ width: 230 }}
        variant="standard"
      />
     
      <FormControlLabel
        className="application-template-child23"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="toggle7">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
        
      </div>
      <div className="application-template-child24" />
      <TextField
        className="date-of-birth"
        color="primary"
        label="Date of Birth "
        sx={{ width: 230 }}
        variant="standard"
      />
      
      <FormControlLabel
        className="application-template-child25"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="toggle8">
        <FormControlLabel
          className="toggle-off"
          label="Hide"
          control={<Switch color="success" />}
        />
        
      </div>
      <div className="application-template-child26" />
      <TextField
        className="gender"
        color="primary"
        label="Gender"
        sx={{ width: 230 }}
        variant="standard"
      />
     
      <FormControlLabel
        className="application-template-child27"
        label="Internal"
        control={<Checkbox color="success" />}
      />
      <div className="group-div">
        <div className="group-child5" />
        <div className="group-child6" />
        <div className="upload-cover-image">Upload cover image</div>
      </div>
      <div className="application-template-inner1">
        <div className="group-child7" />
      </div>
      <div className="upload-cover-image1">Upload cover image</div>
      <Button><img className="image-308-icon" alt="" src="/image-308@2x.png" /></Button>
      <div className="ratio-is-recommended">
        16:9 ratio is recommended. Max image size 1mb
      </div>
    </div>
  );
};

export default ApplicationTemplate;
