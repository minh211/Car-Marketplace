/* eslint-disable react/function-component-definition */
import {
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel,
    OutlinedInput,
    Radio
} from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'components/theme';
import { useState } from 'react';

const SearchSection = () => {
    const [checkedState, setCheckedState] = useState({
        bus1: false,
        bus2: false,
        bus3: false,
        bus4: false,
        bus5: false,
        bus6: false
    });
    const [carType, setCarType] = useState();
    const [priceRange1, setPriceRange1] = useState();
    const [priceRange2, setPriceRange2] = useState();
    const [vehicleType, setVehicleType] = useState();
    const [active, setActive] = useState();
    const { bus1, bus2, bus3, bus4, bus5, bus6 } = checkedState;
    const handleCheckedChange = event => {
        setCheckedState({
            ...checkedState,
            [event.target.name]: event.target.checked
        });
    };

    const handleChangeCarType = event => {
        setCarType(event.target.value);
    };

    const handleChangePriceRange1 = event => {
        setPriceRange1(event.target.value);
    };

    const handleChangePriceRange2 = event => {
        setPriceRange2(event.target.value);
    };

    const handleChangeVehicleType = event => {
        setVehicleType(event.target.value);
    };

    const clearDataRange = () => {
        setPriceRange1('S$ 20,000');
        setPriceRange2('S$ 500,000');
    };

    const clearDataChecked = () => {
        setCheckedState({
            bus1: false,
            bus2: false,
            bus3: false,
            bus4: false,
            bus5: false,
            bus6: false
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="flex justify-center absolute sm:relative w-full mt-[-60px] sm:ml-[13px] sm:mt-[32px] sm:max-w-[349px]">
                <div className="bg-[#fff] border-[1px] border-solid border-[#E3E3E3] w-full mx-[62px] sm:mx-[0px] sm:flex-col flex justify-between rounded-[10px] items-center shadow-md overflow-hidden">
                    <div className="flex items-center sm:flex-col">
                        <FormControl
                            sx={{ m: 1, minWidth: 210 }}
                            className={`m-0 py-[20px] px-[40px] sm:items-center ${
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
                                    <Radio
                                        sx={{
                                            color: '#E3E3E3',
                                            '&.Mui-checked': {
                                                color: theme.buttonMain
                                            }
                                        }}
                                    />
                                    New Car (Authorised Dealer)
                                </MenuItem>
                                <MenuItem value="New Car (Parallel Importer)">
                                    <Radio
                                        sx={{
                                            color: '#E3E3E3',
                                            '&.Mui-checked': {
                                                color: theme.buttonMain
                                            }
                                        }}
                                    />{' '}
                                    New Car (Parallel Importer)
                                </MenuItem>
                                <MenuItem value="Used Cars">
                                    <Radio
                                        sx={{
                                            color: '#E3E3E3',
                                            '&.Mui-checked': {
                                                color: theme.buttonMain
                                            }
                                        }}
                                    />
                                    Used Cars
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <div className="border-[1px] border-dash border-[#F1F1F1] w-[100%] rounded-[20px]"></div>
                        <div className="border-[3px] border-dash border-[#F1F1F1] h-[60px] rounded-[20px] sm:hidden" />
                        <FormControl
                            sx={{ m: 1, minWidth: 210 }}
                            className={`m-0 py-[20px] px-[40px] sm:items-center ${
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
                                onOpen={() => setActive('priceRange')}
                                onClose={() => setActive('')}
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
                                <div
                                    className={
                                        'mt-[24px] mb-[16px] mx-[24px] font-[600]'
                                    }
                                >
                                    Price Range
                                </div>
                                <div
                                    className={
                                        'flex justify-center min-w-[400px] mt-[16px]'
                                    }
                                >
                                    <MenuItem className={'gap-[10px]'}>
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">
                                                Min
                                            </InputLabel>
                                            <OutlinedInput
                                                className={'max-w-[160px]'}
                                                label="Min"
                                                id="component-outlined"
                                                defaultValue="S$ 20,000"
                                                value={priceRange1}
                                                onChange={
                                                    handleChangePriceRange1
                                                }
                                            />
                                        </FormControl>
                                        <Divider
                                            className={
                                                'w-[8px] border-[#232323]'
                                            }
                                        />
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">
                                                Max
                                            </InputLabel>
                                            <OutlinedInput
                                                className={'max-w-[160px]'}
                                                label="Max"
                                                id="component-outlined"
                                                defaultValue="S$ 500,000"
                                                value={priceRange2}
                                                onChange={
                                                    handleChangePriceRange2
                                                }
                                            />
                                        </FormControl>
                                    </MenuItem>
                                </div>
                                <Divider
                                    className={
                                        ' border-[#E3E3E3] flex items-center w-[352px] mx-[24px] mt-[24px]'
                                    }
                                />
                                <div className="flex justify-between ml-[24px] my-[24px]">
                                    <Button
                                        className=" bg-transparent border-[none] text-black normal-case max-w-[73px] h-[40px] rounded-[5px]"
                                        onClick={clearDataRange}
                                    >
                                        Clear
                                    </Button>
                                    <Button className="bg-[#EE1B24] hover:bg-[#94080e] text-white normal-case max-w-[73px] h-[40px] rounded-[5px] mx-[24px]">
                                        Save
                                    </Button>
                                </div>
                            </Select>
                        </FormControl>
                        <div className="border-[3px] border-dash border-[#F1F1F1] h-[60px] rounded-[20px] sm:hidden" />
                        <div className="border-[1px] border-dash border-[#F1F1F1] w-[100%] rounded-[20px]"></div>
                        <FormControl
                            sx={{ m: 1, minWidth: 210 }}
                            className="m-0 py-[20px] px-[40px] sm:items-center"
                        >
                            <div className="text-[16px] leading-[40px] font-[500] ">
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
                                <FormLabel
                                    className={
                                        'mt-[24px] mb-[16px] mx-[24px] font-[600]'
                                    }
                                    component="legend"
                                >
                                    Vehicle Type
                                </FormLabel>
                                <FormGroup
                                    className={
                                        'grid grid-cols-3 min-w-[473px] mt-[16px]'
                                    }
                                >
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus1}
                                                onChange={handleCheckedChange}
                                                name="bus1"
                                            />
                                        }
                                        label="Bus"
                                    />
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus2}
                                                onChange={handleCheckedChange}
                                                name="bus2"
                                            />
                                        }
                                        label="Bus2"
                                    />
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus3}
                                                onChange={handleCheckedChange}
                                                name="bus3"
                                            />
                                        }
                                        label="Bus3"
                                    />
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus4}
                                                onChange={handleCheckedChange}
                                                name="bus4"
                                            />
                                        }
                                        label="Bus4"
                                    />
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus5}
                                                onChange={handleCheckedChange}
                                                name="bus5"
                                            />
                                        }
                                        label="Bus5"
                                    />
                                    <FormControlLabel
                                        className={'ml-[10px]'}
                                        control={
                                            <Checkbox
                                                checked={bus6}
                                                onChange={handleCheckedChange}
                                                name="bus6"
                                            />
                                        }
                                        label="Bus3"
                                    />
                                </FormGroup>
                                <Divider
                                    className={
                                        ' border-[#E3E3E3] flex items-center w-[425px] mx-[24px] mt-[24px]'
                                    }
                                />
                                <div className="flex justify-between ml-[24px] my-[24px]">
                                    <Button
                                        className=" bg-transparent border-[none] text-black normal-case max-w-[73px] h-[40px] rounded-[5px]"
                                        onClick={clearDataChecked}
                                    >
                                        Clear
                                    </Button>
                                    <Button className="bg-[#EE1B24] hover:bg-[#94080e] text-white normal-case max-w-[73px] h-[40px] rounded-[5px] mx-[24px]">
                                        Save
                                    </Button>
                                </div>
                            </Select>
                        </FormControl>
                    </div>
                    <Button className="bg-[#EE1B24] hover:bg-[#94080e] text-white normal-case min-w-[140px] h-[60px] rounded-[5px] mr-[40px] sm:mb-[10px] sm:w-[90%] sm:mx-[20px]">
                        Search
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
};
export default SearchSection;
