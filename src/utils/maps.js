export const API_KEY_MAPS = "AIzaSyDS8-lIoO4HxnLUPcHvMBt-2ltk3AHXRzc"

export const URL_MAPS= (
    lat,
    lng,
    zoom = 14
) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}NY&zoom=${zoom}&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY_MAPS}`;


export const URL_GEOCODING = (lat, lng) => {
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_MAPS}`
   
   
}