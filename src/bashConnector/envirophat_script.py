import envirophat

enviro_data = {
    "pressure":envirophat.weather.pressure() ,
    "temperature":envirophat.weather.temperature(),
    "altitude": envirophat.weather.altitude(),
    "rgb":{
        "red":envirophat.light.rgb()[0],
        "green":envirophat.light.rgb()[1],
        "blue":envirophat.light.rgb()[2]
    },
    "light":envirophat.light.light(),
    "raw":envirophat.light.raw()
}

print(enviro_data)