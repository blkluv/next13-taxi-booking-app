import { DestinationCoordinatesContext } from '@/Context/DestinationCoordinatesContext';
import { SourceCoordinatesContext } from '@/Context/SourceCoordinatesContext';
import { useContext, useEffect, useState } from 'react'

const { v4: uuidv4 } = require('uuid')

const generated_session_token = uuidv4();
generated_session_token && console.log("Session Token: ", generated_session_token);

const MAPBOX_RETRIEVE_URL = `https://api.mapbox.com/search/searchbox/v1/retrieve/{id}?session_token=${generated_session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}}`;

function AutoCompleteAddress() {

    const [ source, setSource ] = useState<any>('');
    const [ sourceChange, setSourceChange ] = useState<any>(true);
    const [ destination, setDestination ] = useState<any>('');
    const [ destinationChange, setDestinationChange ] = useState<any>(true);
    const [ addressList, setAddressList ] = useState<any>([]);
    const { sourceCoordinates, setSourceCoordinates } = useContext<any>(SourceCoordinatesContext);
    const { destinationCoordinates, setDestinationCoordinates } = useContext<any>(DestinationCoordinatesContext);
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList();
            // console.log("Address List: ", addressList));
            // getAddressList() would be called for every keystroke, clearTimeout() function is used to cancel the timeout if the function is called again before the delay has elapsed. This ensures that the getAddressList() function is only called once after the delay has elapsed.
        }, 1000);
        // Clear the timeout if the user types again
        return () => clearTimeout(delayDebounceFn);
    },[source, destination]);

    const getAddressList = async () => {
        setAddressList([]);
        const query = sourceChange ? source : destination;
        const res = await fetch('/api/search-address?q='+query, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await res.json();
        // result.suggestions.length > 0 ? console.log(result.suggestions[0]) : null;
        setAddressList(result);
        addressList && console.log("Address List: ", addressList);
    };
    // Get the coordinates of the source address that was clicked from the address list suggestions
    const onSourceAddressSelection = async (item: any) => {
        
        setSource(item.full_address); 
        setAddressList([]); 
        setSourceChange(false);
        
        const res = await fetch(MAPBOX_RETRIEVE_URL+item.mapbox_id
            +'?session_token='+generated_session_token
            +'&access_token='+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
            const result = await res.json();
            console.log("Result:\t", result);
            // Set the coordinates of the address that was clicked from the address list suggestion dropdown
            setSourceCoordinates({
                lng: result.features[0].geometry.coordinates[0],
                lat: result.features[0].geometry.coordinates[1],
            });
            
    };
    const onDestinationAddressSelection = async (item: any) => {
        
        setDestination(item.full_address); 
        setAddressList([]); 
        setDestinationChange(false);
        
        const res = await fetch(MAPBOX_RETRIEVE_URL+item.mapbox_id
            +'?session_token='+generated_session_token
            +'&access_token='+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
            const result = await res.json();
            console.log("Result:\t", result);
            // Set the coordinates of the address that was clicked from the address list suggestion dropdown
            setDestinationCoordinates({
                lng: result.features[0].geometry.coordinates[0],
                lat: result.features[0].geometry.coordinates[1],
            });
            
        };

    return (
        <div className="mt-5">
            <div className="relative">
                <label htmlFor="" className="text-gray-800">From:</label>
                <input 
                    type="text" 
                    className=' bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-600' 
                    value={source}
                    // getAddressList() would be called whenever a new address is entered
                    onChange={(e) => setSource(e.target.value)} 
                />
                {addressList?.suggestions && sourceChange ?
                    <div className="p-1 shadow-md rounded-md absolute w-full bg-white z-20">
                        {addressList?.suggestions.map((item: any, index: number) => {
                            console.log("Mapbox Id: ", item.mapbox_id);
                            return(
                                <h2 
                                    className="p-3 hover:bg-gray-100 cursor-pointer" 
                                    key={index}
                                    // setSource to set the selected address as the source | setAddressList to clear the address list
                                    onClick={() => onSourceAddressSelection(item)}
                                >{item.full_address}</h2>
                            )
                        })}
                    </div>
                    :
                    null
                }
            </div>
            <div className="mt-3">
                <label htmlFor="" className="text-gray-800">To:</label>
                <input 
                    type="text" 
                    className=' bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-600' 
                    value={destination}
                    // getAddressList() would be called whenever a new address is entered
                    onChange={(e) => setDestination(e.target.value)} 
                />
                {addressList?.suggestions && destinationChange ?
                    <div className="p-1 shadow-md rounded-md absolute w-full bg-white z-20">
                        {addressList?.suggestions.map((item: any, index: number) => (
                            <h2 
                                className="p-3 hover:bg-gray-100 cursor-pointer" 
                                key={index}
                                // setDestination to set the selected address as the source | setAddressList to clear the address list
                                onClick={() => onDestinationAddressSelection(item)}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AutoCompleteAddress