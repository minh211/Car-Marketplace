/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import {Divider, OutlinedInput, InputLabel, Checkbox, FormControlLabel, FormLabel, FormGroup} from "@mui/material";

const SearchSection = () => {
    const [checkedState, setCheckedState] = useState({
        bus1: true,
        bus2: false,
        bus3: false,
    })
    const [carType, setCarType] = useState();
    const [priceRange, setPriceRange] = useState();
    const [vehicleType, setVehicleType] = useState();
    const [active, setActive] = useState();

    const {bus1,bus2,bus3} = checkedState;
    const handleCheckedChange = (event) => {
        setCheckedState({
            ...checkedState,
            [event.target.name]: event.target.checked,
        });
    };
    const handleChangeCarType = event => {
        setCarType(event.target.value);
    };

    const handleChangePriceRange = event => {
        setPriceRange(event.target.value);
    };

    const handleChangeVehicleType = event => {
        setVehicleType(event.target.value);
    };

    return (
        <div className="flex justify-center absolute w-full mt-[-60px]">
            <div className="bg-[#fff] border-[1px] border-solid border-[#E3E3E3] w-full mx-[62px] flex justify-between rounded-[10px] items-center shadow-md overflow-hidden">
                <div className="flex items-center">
                    <FormControl
                        sx={{ m: 1, minWidth: 210 }}
                        className={`m-0 py-[20px] px-[40px] ${
                            active === 'carType' ? 'bg-[#fff]' : ''
                        }`}
                    >
                        <div className="text-[16px] leading-[40px] font-[500]">
                            New/ Used
                        </div>
                        <Select
                            displayEmpty
                            id="car-types"
                            labelId="car-types"
                            value={carType}
                            onChange={handleChangeCarType}
                            onOpen={() => setActive('carType')}
                            onClose={() => setActive('')}
                            renderValue={value => `${value}`}
                            defaultValue="New Cars"
                            className="h-[50px] !font-[14px]"
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '14px',
                                    paddingLeft: '0px'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                        >
                            <MenuItem value="New Car (Authorised Dealer)">
                                New Car (Authorised Dealer)
                            </MenuItem>
                            <MenuItem value="New Car (Parallel Importer)">
                                New Car (Parallel Importer)
                            </MenuItem>
                            <MenuItem value="Used Cars">Used Cars</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="border-[3px] border-dash border-[#F1F1F1] h-[60px] rounded-[20px]" />
                    <FormControl
                        sx={{ m: 1, minWidth: 210 }}
                        className={`m-0 py-[20px] px-[40px] ${
                            active === 'priceRange' ? 'bg-[#fff]' : ''
                        }`}
                    >
                        <div className="text-[16px] leading-[40px] font-[500]">
                            Price Range
                        </div>
                        <Select
                            displayEmpty
                            id="price-range"
                            labelId="price-range"
                            value={priceRange}
                            onChange={handleChangePriceRange}
                            onOpen={() => setActive('priceRange')}
                            renderValue={value => `${value}`}
                            defaultValue="$10,0000 - $100,0000"
                            className="h-[50px] !font-[14px] rounded-[15px]"
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '14px',
                                    paddingLeft: '0px'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                        >
                            <div className={"mt-[24px] mb-[16px] mx-[24px] font-[600]"}>Price Range</div>
                            <div className={"flex justify-center min-w-[400px] mt-[16px]"}>
                                <MenuItem className={"gap-[10px]"}>
                                    <FormControl>
                                        <InputLabel htmlFor="component-outlined">Min</InputLabel>
                                        <OutlinedInput className={"max-w-[160px]"}label="Min" id="component-outlined" defaultValue="S$ 20,000" value={priceRange} onChange={handleChangePriceRange} />
                                    </FormControl>
                                    <Divider className={"w-[8px] border-[#232323]"}/>
                                    <FormControl>
                                        <InputLabel htmlFor="component-outlined">Max</InputLabel>
                                        <OutlinedInput className={"max-w-[160px]"} label="Max" id="component-outlined" defaultValue="S$ 500,000" value={priceRange} onChange={handleChangePriceRange} />
                                    </FormControl>
                                </MenuItem>
                            </div>
                            <Divider className={" border-[#E3E3E3] flex justify-between items-center"}/>
                        </Select>
                    </FormControl>
                    <div className="border-[3px] border-dash border-[#F1F1F1] h-[60px] rounded-[20px]" />
                    <FormControl
                        sx={{ m: 1, minWidth: 210 }}
                        className="m-0 py-[20px] px-[40px] "
                    >
                        <div className="text-[16px] leading-[40px] font-[500]">
                            Vehicle Type
                        </div>
                        <Select
                            displayEmpty
                            id="vehicle-types"
                            labelId="vehicle-types"
                            value={vehicleType}
                            onChange={handleChangeVehicleType}
                            renderValue={value => `${value}`}
                            defaultValue="+10 More"
                            className="h-[50px] !font-[14px]"
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '14px',
                                    paddingLeft: '0px'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                        >
                            <FormLabel className={"mt-[24px] mb-[16px] mx-[24px] font-[600]"} component="legend">Vehicle Type</FormLabel>
                            <FormGroup className={"flex justify-center min-w-[473px] min-w-[350px] mt-[16px]"}>
                                <FormControlLabel
                                    className={"ml-[10px]"}
                                    control={
                                        <Checkbox checked={bus1} onChange={handleCheckedChange} name="bus1" />
                                    }
                                    label="Bus"
                                />
                                <FormControlLabel
                                    className={"ml-[10px]"}
                                    control={
                                        <Checkbox checked={bus2} onChange={handleCheckedChange} name="bus2" />
                                    }
                                    label="Bus2"
                                />
                                <FormControlLabel
                                    className={"ml-[10px]"}
                                    control={
                                        <Checkbox checked={bus3} onChange={handleCheckedChange} name="bus3" />
                                    }
                                    label="Bus3"
                                />
                            </FormGroup>
                        </Select>
                    </FormControl>
                </div>
                <Button className="bg-[#EE1B24] hover:bg-[#94080e] text-white normal-case min-w-[140px] h-[60px] rounded-[5px] mr-[40px]">
                    Search
                </Button>
            </div>
        </div>
    );
};
export default SearchSection;
