import React from "react";
import Group from "../../components/group";
import Member from "../../components/group/member";
import { connect } from "react-redux";
import "./groups.css";

const mapStateToProps = ({ windowInnerWidth: { value } }) => {
  return { widnowInnerWidth: value };
};

export function Groups({ widnowInnerWidth }) {
  return (
    <Group
      globalStyle={{ margin: 3, padding: 3 }}
      /* columns={[[1, 500], [2, 1000], [3, 1500]]} */
      columns={Math.floor(widnowInnerWidth / 500)}
      filters={[
        member => member.props.children !== "hello",
      member => member.props.children !== "patryk",
      member => member.props.children !== "world"
      ]}
      className="groups"
    >
    <Member key="1">
      <Group columns={2} style={{ maxHeight:400 }}>
      <Member key="1a">patryk1</Member>
      <Member key="1c">patryk1</Member>
        <Member key='1b'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices
          orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
          ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
          Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
          vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
          libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a
          laoreet libero finibus vel. Suspendisse ultrices orci vitae metus
          suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta.
          Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu
          ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam
          congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl
          fermentum vulputate nec eget neque. Etiam molestie urna porttitor
          lectus tristique egestas. Nam convallis finibus porta. Donec est
          justo, ultrices non orci et, dapibus tincidunt eros. Aenean
          ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo,
          a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id
          porta sit amet, aliquam id sapien. Nunc mollis nibh sed blandit
          faucibus. Duis venenatis, ante non molestie
        </Member>
      </Group></Member>
      <Member key="2">patryk</Member>
      <Member key="3">hello</Member>
      <Member key="4">world</Member>
      <Member key="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci
        vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
        ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
        Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
        vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitae metus suscipit
        ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida
        hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis
        sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex
        sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec
        eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam
        convallis finibus porta. Donec est justo, ultrices non orci et, dapibus
        tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed
        porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum
        sem augue, posuere id porta sit amet, aliquam id sapien. Nunc mollis
        nibh sed blandit faucibus. Duis venenatis, ante non molestie
      </Member>
      <Member key="6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci
        vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
        ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
        Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
        vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitae metus suscipit
        ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida
        hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis
        sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex
        sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec
        eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam
        convallis finibus porta. Donec est justo, ultrices non orci et, dapibus
        tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed
        porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum
        sem augue, posuere id porta sit amet, aliquam id sapien. Nunc mollis
        nibh sed blandit faucibus. Duis venenatis, ante non molestie
      </Member>
      <Member key="7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci
        vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
        ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
        Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
        vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitae metus suscipit
        ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida
        hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis
        sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex
        sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec
        eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam
        convallis finibus porta. Donec est justo, ultrices non orci et, dapibus
        tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed
        porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum
        sem augue, posuere id porta sit amet, aliquam id sapien. Nunc mollis
        nibh sed blandit faucibus. Duis venenatis, ante non molestie
      </Member>
      <Member key="8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci
        vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse
        ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed maximus lacinia turpis, a laoreet libero finibus vel.
        Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus
        vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet
        libero finibus vel. Suspendisse ultrices orci vitae metus suscipit
        ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida
        hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis
        sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex
        sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec
        eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam
        convallis finibus porta. Donec est justo, ultrices non orci et, dapibus
        tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed
        porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum
        sem augue, posuere id porta sit amet, aliquam id sapien. Nunc mollis
        nibh sed blandit faucibus. Duis venenatis, ante non molestie
      </Member>
    </Group>
  );
}

export default connect(mapStateToProps)(Groups);
