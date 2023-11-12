import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

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

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCSTk81W_0RaNyxBHF4GS65EbdveW7aCBU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

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
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
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
            marginTop: '50px',
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
        <Box sx={{
                width: 500,
                height: 100,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'center',
                textAlign: 'start',
                paddingTop: 3
          }}>
          <Dropdown title="Select route" items={items}/>
        </Box>
        </div>
    </div>
  );
}

export default React.memo(App);
