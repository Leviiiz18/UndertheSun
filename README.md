# UndertheSun
Problem Statement: Traffic congestion is a growing issue in urban areas, leading to increased travel time, fuel consumption, and pollution. How can technology help optimize traffic flow, reduce congestion, and improve the overall transportation experience for commuters? Theres already a google map existing how can we make our website better than that

### **Project Summary**

This project is a **traffic congestion mapping application** that consists of two main functionalities:

1. **Traffic Update Page**:
   - Allows users to input traffic congestion details like location names and descriptions (e.g., "Hampankatta - Heavy Congestion").
   - Data can be stored in a file, `localStorage`, or another source.

2. **Interactive Map Page**:
   - Displays a map of Mangalore (or the specified region).
   - Automatically places markers on the map based on traffic updates (location names) entered in the traffic update page.
   - Uses Mapbox's Geocoding API to convert location names into accurate geographical coordinates (latitude and longitude).
   - Displays a popup for each marker with details of the traffic condition (e.g., "Hampankatta - Heavy Congestion").
   - Includes features like:
     - Fullscreen view.
     - Navigation controls.
     - Colorful routes for driving directions.
     - Markers are removable by clicking on them.

---

### **Key Files**:
1. **Traffic Update File**:
   - Collects traffic details.
   - Data is stored in `localStorage` or as a JavaScript array for integration with the map.

2. **Map File**:
   - Visualizes the data from the traffic update page.
   - Uses Mapbox API for mapping and geocoding.

Let me know if you need further adjustments!
