# Card component

This is a set of components  the content area.

## Components :


- WaterDropCards.vue
    <details>
    <summary>Screenshot</summary>
    <img src="https://github.com/Constantine-Ka/Constantine-Ka.github.io/blob/master/screenshots/Card/Screenshot_.png">
    </details>  
    <details>
        <summary>Props</summary>
        <pre>
          title string,
          description string,
          basicColor hex (color line)
        </pre>
    </details>  


- ResponsiveServicesSection.vue
    <details>
    <summary>Screenshot</summary>
    <img src="https://github.com/Constantine-Ka/Constantine-Ka.github.io/blob/master/screenshots/Card/Screenshot_2.png">
    </details>  
    <details>
        <summary>Props</summary>
        <pre>
          content:{
            icon  <b>string</b> //attribute <b>name</b> for library 'ionic/icon',
            title <b>string</b>,
            description <b>string</b>
          },
          colorStyle <b>hex</b> //color line
        </pre>
    </details>  
  
- CardBlockCircularProgressBar.vue
    <details>
    <summary>Screenshot</summary>
    <img src="https://github.com/Constantine-Ka/Constantine-Ka.github.io/blob/master/screenshots/Card/Screenshot_3.png">
    </details>  
    <details>
        <summary>Props</summary>
        <pre>
          item:{
            text <b>string</b>,
            value <b>number</b> //in %
          }
        </pre>
    </details>
- PricingCard.vue
  <details>
  <summary>Screenshot</summary>
  <img src="https://github.com/Constantine-Ka/Constantine-Ka.github.io/blob/master/screenshots/Card/Screenshot_4.png">
  </details>  
  <details>
      <summary>Props</summary>
      <pre>
        content:{
          title string,
          price:number,
          description[string]
        },
        gradient:[string],
        isBtn:boolean //button or link
      </pre>
  </details> 