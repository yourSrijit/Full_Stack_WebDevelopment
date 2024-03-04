# Context API PART 2

## Change of the theme

![Darkthemetoggle](https://github.com/yourSrijit/Full_Stack_WebDevelopment/assets/91645620/916e3c9a-96eb-4146-9ffa-ed14d464d1db)


## Context part 
```
import { createContext,useContext } from "react";
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
}) 
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext);
}
```
## Also dont forget to write darkMode:"class" in the tailwind.config.js file otherwise it will not work
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}
```

[Youtube video](https://youtu.be/JQVBGtZMqgU?si=OhgO1WIelvMlLEC8)
