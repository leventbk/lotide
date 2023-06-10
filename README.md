Lotide kontrol: 

I understand, I can give you few bullets to check before proceeding publishing it
-make sure every file has the same name of the file as a function declared and that function exported on the bottom, if there is any extra function required that is not called as the same name of the file it should be a require statement rather than other declaration

-make sure all your test cases are located in the /tests folder  and that they contained no declared functions but only require statements calling the same function as the name of the test (for example headTest.js should only have the head function required at the top)
-make sure all the test cases are using mocha and chai, if any of those are still using your custom “assertEqual” or “assertArraysEqual” functions, those should be refactored to use mocha and chai
-make sure you have a file called index.js where all your other files/functions are required and as well exported inside an object
-make sure you have a read me file that is properly describing all your functions and guiding on how to both use your project as a library and as well how to clone and test your project as an individual package 

Yes I would even suggest to delete those test cases (just the assert ones)

As you mentioned those are not possible to be tested due to not returning any value just console logging as a side effect, correct
So if you already have those check marks I think you pretty much have all what is needed 🙂
Run npm test to make sure all tests passes and try downloading and using your project from an external package using npm install [your-npm-lotide] and requiring it
If this last two work you are ready to submit