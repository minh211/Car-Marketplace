/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SearchSection() {
    const [carType, setCarType] = useState();
    const [priceRange, setPriceRange] = useState();
    const [vehicleType, setVehicleType] = useState();
    const [active, setActive] = useState();

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
                            <MenuItem value="New Car (Authorised Dealer)">
                                +10 More
                            </MenuItem>
                            <MenuItem value="New Car (Parallel Importer)">
                                +10 More
                            </MenuItem>
                            <MenuItem value="Used Cars">+10 More</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button className="bg-[#EE1B24] hover:bg-[#94080e] text-white normal-case min-w-[140px] h-[60px] rounded-[5px] mr-[40px]">
                    Search
                </Button>
            </div>
        </div>
    );
}
