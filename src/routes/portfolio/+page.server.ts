import { readdirSync, statSync } from 'fs';
import path from 'path';

interface ProjectData {
  tools: string;
  description: string;
}

export async function load() {
  const baseDir = 'static';
  const folders = readdirSync(baseDir);

  const projects = folders
    .map((folder) => {
      const folderPath = path.join(baseDir, folder);
      if (statSync(folderPath).isDirectory()) {
        const pathSections = folderPath.replace('static/', '').split('-');
        const images = readdirSync(folderPath).filter((file) =>
          /\.(jpg|jpeg|png|gif)$/i.test(file)
        );
        const name = pathSections[1];
        const { tools, description } = getDescription(name);
        return { folder, title: name, images, tools, description };
      }
    })
    .filter(Boolean);

  return { projects };
}

function getDescription(name: string): ProjectData {
  console.log('name: ' + name);
  switch (name) {
    case 'Colombia Dark':
      return {
        tools: 'Adobe Illustrator & Photoshop',
        description:
          "This was one of my favorite projects. I revived a client relationship with Angel's Cup, a coffee subscription service, during my first year at Dynamite. Angel's Cup specifically requested a dark roast, and the roasting staff put together a delicious coffee using the same beans as our Colombia light roast. We needed an official label for this new coffee, though, so I took home a bag, brewed a cup, and got to work. I wanted to play off of the Colombia light roast label, which had an engraving of a condor on a white background, while also referencing a fan favorite dark roast Dynamite carried: the Suplicar Clemencia. Suplicar's engraved icon was a skull, and so I took both of these elements as inspiration, and sketched out the skull of a condor. I imported my lineart into photoshop and used a drawing tablet to turn it into something usable, and designed the label with a black background to mark it as a super-seasonal, very limited edition run. The square images were some of the promotional images that were posted to social media."
      };
    case 'All Star Series':
      return {
        tools: 'Adobe Illustrator',
        description:
          'These labels were for a collection of limited edition coffees that only came around during the fall, but they changed each year as the farmers produced different lots of coffee. Dynamite already had various labels for their All Star program, but they lacked two important things: distinction, and ease of replication. They looked just like any of their other regular line-up coffees, and they were inconsistent across each year. I asked if I could make some labels that let shoppers know at a glance that these were unique, limited edition products, and Dynamite gave me the green light. I decided to design a template that could work for easy replication as the coffees changed year-to-year, and altered their color based on the process type: red for natural, yellow for honey, and blue for washed. We saw quite an increase in retail sales once these labels were implemented.'
      };
    case 'BMMC: Mental Health Awareness Month':
      return {
        tools: 'Adobe Illustrator',
        description:
          'Every year, we partnered with Black Mountain Counseling Center to raise money for Mental Health Awareness Month. In 2024, I decided to pair it with a social media campaign on Instagram. Each week during May, a day was blocked off for one of these posts. This project was an exercise in technical skill within Illustrator. I used multi-layer clipping masks and compound paths to create the floral pattern and have it overlap the foreground elements in specific spots.'
      };
    case 'Coffee Promotions':
      return {
        tools: 'Photography, Adobe Illustrator & Photoshop',
        description:
          'Every quarter, Dynamite released a seasonal microlot, and driving customer awareness was a big part of my role. Besides email campaigns, these were some images I created for posting on social media.'
      };
    case 'Digital Art':
      return {
        tools: 'Adobe Photoshop',
        description:
          'This is a collection of some of my favorite digital art pieces. These were mostly for personal use and keeping my skills sharp on my drawing tablet.'
      };
    case 'Gift Cards':
      return {
        tools: 'Adobe Illustrator',
        description:
          'This project was a great way to flex my creativity while still working within strict branding guidelines. For the gift cards, I decided to use a fingerprint texture I had on hand. This texture was also used on the coffee bags, so it was a great way to keep things simple while also keeping them very much on-brand. In addition to the design, I brushed up on my pre-production knowledge and took the product from concept to completion. Working with the printer was a unique challenge, as they were a specialty plastic printer, and required a specific layer structure in order to print correctly.'
      };
    case 'Monthly Specials':
      return {
        tools: 'Adobe Illustrator, Adobe Photoshop, Photography',
        description:
          'I worked closely with the cafe manager to create these signs for the monthly special drinks. Over time, a certain style took root with the blocks of texture and the typefaces I preferred. These were a challenge due to the turnaround time needed to create them, as I would sometimes only have a few days from knowing what the monthly special would be to needing to have the design elements completed.'
      };
    case 'Private Labels':
      return {
        tools: 'Adobe Illustrator, Adobe Indesign, Adobe Photoshop',
        description:
          'While at Dynamite, I completely overhauled and reorganized the Private Label program. When a business wanted to have a good coffee with their own branding on it, I would usually work directly with the client to brainstorm, gather elements, and execute a label design. These are a collection of some of my favorites, and the single-page document is what I designed to put all of the information needed on one page.'
      };
    case "Santa's Little Helper":
      return {
        tools: 'Adobe Illustrator, Adobe Photoshop, Photography',
        description:
          "Another favorite of mine. Each year, Dynamite would put out a Christmas seasonal coffee that was only available from Thanksgiving through December, and it was put in a shiny red bag. They had been using a label that was well over a decade old, and it was really outdated. My coworkers had a hilarious name for the Santa Claus on the old label, though I won't repeat that here--and after more than a little asking, management granted my request to redesign it from scratch. I spent a few days looking up vintage art of Santa from the early 20th century, and illustrated a portrait of the character holding a cup of coffee. After inking and coloring it in Photoshop, I took the image into Illustrator to design the label itself, and did my best to give it a subtle art-deco feel. Pictured is the result, printed and on the shiny red bag."
      };
    case 'Steeped Packaging':
      return {
        tools: 'Adobe Illustrator, Adobe Indesign',
        description:
          "There is a special kind of satisfaction that comes from designing a package for a completely new product. Nothing to rebrand, nothing to overhaul; but instead, a completely new, unique creation. STEEPED provided a printing guide for the packaging, with strict guidelines on what information had to be present, and where it had to be on the packaging, so the challenge became creating a coherent, visually appealing package that both adhered to Dynamite's core brand, as well as adhering to the required guidelines of STEEPED. In the end, everyone was thrilled with the results, including me."
      };
    default:
      return {
        tools: 'Unknown',
        description: 'Description not available.'
      };
  }
}
