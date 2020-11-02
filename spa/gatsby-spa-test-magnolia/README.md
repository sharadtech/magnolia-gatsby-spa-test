# Project Name : GATSBY SPA TEST

### Light Modules

The main parts of the project are:

* `spa-test-lm`: Main light module containing everything like dialogs, rest API definition etc.
* `gatsby-spa-test-lm`: contains template definition and static web resources which are generated by `spa/gatsby-spa-test-magnalia` react gatsby application.

### Run the project in local development environment.

* Go to project directory after cloning the git repository :
  `cd gatsby-spa-test/magnolia`

* Download and install the magnolia cms. (This method should only be used for local dev environment)
  `mgnl jumpstart`

  Choose option 2 - to finish the installation

* Copy the development content before starting the Magnolia Server.
  `cp -rv ./_dev/content-to-bootstrap/* ./apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common`

* Start Magnolia CMS server.
  `mgnl start`

* Configure CORS as per defined in this location : https://hd.magnolia-cms.com/docs/getting-started/hello-spa/#configure-cors

* Configure DAM Access 
  In order for images to be displayed:
  Open the Security app, open the `Roles` tab, edit the `anonymous` role, go to `Web access` tab, `Add new` with this path `/dam/*` set to GET.

  ![Image Access for Anonymous](magnolia/_dev/README-security-anonymous-dam.png)

* Install the SPA Application
  `cd gatsby-spa-test/spa/gatsby-spa-test-magnolia`
  `npm install`
  `npm run deploy:mgnl`

* Either create the main page manually with specific name : `gatsby-spa-test` or import the content using the next steps which was the main requirement of the test.

* Steps to import the content

  ** Open Magnolia CMS on url : http://localhost:8080/
  ** Select `Run the Web update on the author instance`
  ** Login with credentials `superuser` 
  ** Select Pages App
  ** Import the content using file `gatsby-spa-test/magnolia/_dev/content-to-import/website.gatsby-spa-test.yaml`

* Test Website should be accessible and must look like as follows:

  ![Final Result](magnolia/_dev/README-FinalWebPage-TestResult.png)

### Testing

Didn't had time to write unit testing... but in real world scenario, unit test cases will be updated along with component codebase.