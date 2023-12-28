import React from 'react'
import { CopyBlock, nord } from "react-code-blocks";


const Snippet = () => {
  return (
    <div>
      <CopyBlock
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis obcaecati blanditiis a quisquam accusantium quaerat ipsam atque at ex, sit, aut vel tempora exercitationem eos similique voluptatibus modi voluptates?"
        theme={nord}
        language="javascript"
      />
    </div>
  );
}

export default Snippet