## Requirements for Spinning wheel app
1. Ability to spin the wheel (visual spin)
2. Ability to insert, update, or remove items
3. Randomized selection of item
4. Wheel is divided evenly based on the number of items
 
## Requirements analysis
1. Ability to spin the wheel (visual spin)
    - Click to spin the wheel
    - Wheel should visually spin until it hits the chosen item (at least 3 spins)
        - Chosen item inidicated by stationary pointer `<`

2. Ability to insert, update, or remove items
    - Store inputs in an array to be able to track changes  
    - Create a form to receive inputs
    - Display list of existing inputs with icons to update or remove 
        - Update or removal of item should be reflected in wheel immediately

3. Randomized selection of item
    - Randomization algo that selects from the existing items in the array

4. Wheel is divided evenly based on the number of items
    - 360 / length of array (rounded down)
    - Each slice should have a different, unique color
