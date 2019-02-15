import React from 'react'

import Layout from '../components/layout'
import image from '../img/code.jpg'

export default () => (
  <Layout>
    <h1>About Me</h1>
    <img src={image} alt="TypeScript code on a computer screen" />
    <p
      style={{
        fontSize: '14px'
      }}
    >
      <strong>Name:</strong> Max Karlsson <br />
      <strong>Location:</strong> Melbourne <br />
      <strong>Favourite (programming) languages:</strong> JavaScript,
      TypeScript, Python
      <br />
      <strong>Favourite DBMS:</strong> Neo4j & MongoDB. <br />
      <strong>Education:</strong> Bachelor's degree from Linnaeus University in
      Sweden. <br />
    </p>
    <h4>My story</h4>
    <p>
      I'm a Swedish-born full stack developer who spent the better part of my
      twenties travelling around, living and working in 4 different countries;
      including Canada, Sweden, Norway and Australia.
    </p>
    <h4>My passions</h4>
    <p>
      I truly love JavaScript, even in spite of all its kinks and quirks, or
      perhaps due to them. There are just so many things you can do with the
      language: web apps, native apps, APIs, services, scripts, IoT, AI... the
      list is long. With the addition of TypeScript you can also get typesafety
      and improve the developer experience.
    </p>
    <p>
      I'm also a big science fiction nerd, especially Star Trek and similarly
      inspired stories. To me, exploring the unknown is what intrigues me,
      perhaps unsurprising given my history of travelling the world. I believe
      that science fiction has an important role to play in the world of today,
      by either warning of things that could happen or inspiring us with the
      wonders our future could hold in store if we only make it so.
    </p>
    <h4>My mission</h4>
    <p>
      As a programmer, I want to be a part of innovation and continue to build
      the applications of tomorrow. As a writer I want to inspire people into
      action, either to learn something new, or to make improvements to the
      world we all share.
    </p>
  </Layout>
)
