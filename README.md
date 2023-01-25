# TypeScript
What and why javascript?

<b>What 
    Open-source programming language from microsoft
    Typed superset of javascript
    Compiles down to plain javascript

<b>Why
    Relation to javascript --> you can even rename 'js' file to 'ts' file and it will work fine.
    Optional static typing and type inference --> Typescript is dynamically type which which means javascript does not know what type
                                                  a variable is untill it is actually instantiated at runtime which is too late, 
                                                  typescript on the other hand add type support to javascript as when error identified as 
                                                  and when you type your code and during the compilation step, this results in less error-prone
                                                  code and avoiding having to wakeup in the night at 2:00 am to fix a production issue and the
                                                  best part is specifiying the type is completely optional , when you dont specify a type, 
                                                  typescript will infer the type for you and still point out the errors which would otherwise be seen only
                                                  during runtime 

    IDE Support --> strong IDE support, intellisense, proper error debugging
    Rapid growth and use --> Used in most of the application, used in different languages like react and angular 

    # =================================================================================================================================================
        
        ----------------------------------------- Environment setup ------------------------------------------------
        1) Download Node js from https://nodejs.org/en/download/ LTS version   
                    To check version open cmd and run node -version or node -v
        2) Install typescript by running the command --> npm install -g typescript
                    To check version open cmd and run tsc -v 
        3) Install Visual studio code from https://code.visualstudio.com/download 

    #====================================================================================================================================================

    Start development 
        1) create empty folder and open it in vs code(visual studio code)

    Note:
        All practice file will in this folder 
        Starting from main.ts 
    Remeber:
        create file clicking on icon with .ts extension


    # ===================================================================================================================================================

    To run main.ts file
        run tsc main.ts --> This will create main.js file
        then 
        run node main.js --> This will print the consoles messages 

    Note:
        extension is not mendatory 