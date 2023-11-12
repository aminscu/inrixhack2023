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
import Dropdown from './components/Dropdown'; 


import React, {useState, useEffect} from "react";
import { SearchBar } from "./components/SearchBar";
import { Options } from './components/Options';
import { NumberBox } from "./components/NumberBox";

const items = [
  {
    id: 1,
    value: 'Route 1',
  },
  {
    id: 2,
    value: 'Route 2',
  },
  {
    id: 3,
    value: 'Route 3',
  },
];

const containerStyle = {
  width: '690px',
  height: '690px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};
  
function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSTk81W_0RaNyxBHF4GS65EbdveW7aCBU"
    
  });

  if (loadError) {
    return <div> Error Loading Maps</div>;
  }

  if(!isLoaded) {
    return <div>Loading Maps</div>;

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
                paddingTop: 3
          }}>
          <SearchBar/>
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
          <SearchBar/>
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
                <br></br>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Walk" />
                    <FormControlLabel value="male" control={<Radio />} label="Drive" />
                    <NumberBox/>
                  </RadioGroup>
                </FormControl>
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
          <Button>Submit</Button>
         </ButtonGroup>
        </Box>
        <div style={{  
            marginTop: '15px'
        }}>
        <Box sx={{
                width: 400,
                height: 150,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'start',
                paddingTop: -3
          }}>
          <Dropdown title="Select Routes" items={items}/>
        </Box>
        </div>
        </div>
    </div>
  );

  
}

export default App;
