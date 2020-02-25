import envirophat

enviro_data = {
    "pressure":envirophat.weather.pressure() ,
    "temperature":envirophat.weather.temperature(),
    "altitude": envirophat.weather.altitude(),
    "rgb":envirophat.light.rgb(),
    "light":envirophat.light.light(),
    "raw":envirophat.light.raw()
}

print enviro_data