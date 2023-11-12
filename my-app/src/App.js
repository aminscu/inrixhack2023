import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import logo from './logo.svg';
import {Box} from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './App.css';
import main from './inrix_route.py';
//import Dropdown from './components/Dropdown'; 


import React, {useState, useEffect} from "react";
import { SearchBar } from "./components/SearchBar";
import { Options } from './components/Options';
import { NumberBox } from "./components/NumberBox";

let index = 0; 

const containerStyle = {
  width: '690px',
  height: '690px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};
  
function App() {
  const [items, setItems] = useState([]);
  const [commentText1,setCommentText1] = useState("")
  const [commentText2,setCommentText2] = useState("")
  const [commentText3,setCommentText3] = useState("")
  const [geo, setGeo] = useState([]);
  const [coor, setCoor] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSTk81W_0RaNyxBHF4GS65EbdveW7aCBU"
    
  });

  function callMain() {
    fetch("http://localhost:1234/main", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({value1: commentText1, value2: commentText2})
    }).then((res) => res.json()).then((items) => {
      console.log(items);
      setItems(items);
      // setItems([...items, {id: ++index, value: "Route " +index}]);
    });
  }

  function callGeo() {
    fetch("http://localhost:1234/geo-guesser", {
      method: "POST", 

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({value1: commentText1, value2: commentText2})
    }).then((res) => res.json()).then((geo) => {
      console.log(geo);
      setGeo(geo); 
    });
  }

  function callInrix() {
    fetch("http://localhost:1234/call-inrix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({value1: geo[0], value2: geo[1], value3: geo[2], value4: geo[3]})
    }).then((res) => res.json()).then((coor) => {
      console.log(coor);
      setCoor(coor); 
    });
  }

  
  if (loadError) {
    return <div> Error Loading Maps</div>;
  }

  if(!isLoaded) {
    return <div>Loading Maps</div>;

  }
  
  const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(commentText1, commentText2, commentText3);
        callMain();
        callGeo();
        callInrix();
    } 

  return (
    <div className="App">
      <div style={{  
            marginLeft: '50px',
            marginTop: '50px'
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: 'transparent',
                textAlign: 'center',
                paddingTop: 3,
                marginLeft: 65
          }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          ></GoogleMap>
        </Box>
        </div>
      <div style={{  
            marginLeft: '50px',
            marginTop: '-50px'
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'center',
                paddingTop: 3,
          }}>
          <div className="input-wrapper">
            <input placeholder="Type to Search..." value = {commentText1}
                     onChange={e => {
                      setCommentText1(e.target.value);
                     } }/>
            </div>
        </Box>
        </div>
        <div style={{  
            marginLeft: '50px',
            marginTop: '50px',
            marginBottom: '50px',
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'center',
                paddingTop: 3
          }}>
          <div className="input-wrapper">
            <input placeholder="Type to Search..." value = {commentText2}
                     onChange={e => {
                      setCommentText2(e.target.value);
                     } }/>
            </div>
        </Box>
        </div>
      <div style={{  
            marginLeft: '50px',
        }}> 
            <Box sx={{
              width: 400,
              height: 100,
              borderRadius: 1,
              bgcolor: '#6adeeb',
              textAlign: 'center',
              paddingTop: 1
        }}> 
                Options
                <div className="radius">
                  <input placeholder="Radius" value = {commentText3}
                     onChange={e => {
                      setCommentText3(e.target.value);
                     } }/>
            </div>
            </Box> 
        </div>
        <div style={{  
            marginLeft: '50px',
            marginTop: '8px',
            marginBottom: '50px',
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: 'Transparent',
                textAlign: 'center',
                paddingTop: 3
          }}>
          <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleSubmit}>Submit</Button>
         </ButtonGroup>
        </Box>
        <div style={{  
            marginTop: '15px'
        }}>
        {/* <Box sx={{
                width: 400,
                height: 150,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'start',
                paddingTop: -3
          }}>
          <Dropdown title="Select Routes" items={items}/>
        </Box> */}
        </div>
        </div>
    </div>
  );

  
}

export default App;
