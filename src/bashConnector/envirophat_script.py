import envirophat
import numpy as np
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
    "raw":np.array(envirophat.light.raw()).tolist()
}

print(enviro_data)