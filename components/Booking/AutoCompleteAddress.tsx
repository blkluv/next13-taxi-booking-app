import { useEffect, useState } from 'react'

const AutoCompleteAddress = () => {

    const [ source, setSource ] = useState<any>('');
    const [ sourceChange, setSourceChange ] = useState<any>(true);
    const [ destination, setDestination ] = useState<any>('');
    const [ destinationChange, setDestinationChange ] = useState<any>(true);
    const [ addressList, setAddressList ] = useState<any>([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList();
            
            // getAddressList() would be called for every keystroke, clearTimeout() function is used to cancel the timeout if the function is called again before the delay has elapsed. This ensures that the getAddressList() function is only called once after the delay has elapsed.
            return () => clearTimeout(delayDebounceFn);
        }, 3000);
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
        // result.suggestions.length > 0 ? result.suggestions.map(add => console.log(add.full_address)) : null;
        setAddressList(result);
    };

    return (
        <div className="mt-5">
            <div className="relative">
                <label htmlFor="" className="text-gray-400">From:</label>
                <input 
                    type="text" 
                    className=' bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-600' 
                    value={source}
                    // getAddressList() would be called whenever a new address is entered
                    onChange={(e) => setSource(e.target.value)} 
                />
                {addressList?.suggestions && sourceChange ?
                    <div className="p-1 shadow-md rounded-md absolute w-full bg-white z-20">
                        {addressList?.suggestions.map((item: any, index: number) => (
                            <h2 
                                className="p-3 hover:bg-gray-100 cursor-pointer" 
                                key={index}
                                // setSource to set the selected address as the source | setAddressList to clear the address list
                                onClick={() => { setSource(item.full_address); setAddressList([]); setSourceChange(false); }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                    :
                    null
                }
            </div>
            <div className="mt-3">
                <label htmlFor="" className="text-gray-400">To:</label>
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
                                onClick={() => { setDestination(item.full_address); setAddressList([]); setDestinationChange(false); }}
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