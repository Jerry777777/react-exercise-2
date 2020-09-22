import React from 'react';
import Phone from '../phone/Phone';

class HuaWeiPart extends React.Component {
  constructor(props) {
    super(props);
    this.phoneModel = [
      { model: 'HUAWEI P40 Pro+' },
      { model: 'HUAWEI Mate 30' },
      { model: 'HUAWEI nova 7' },
    ];
  }

  render() {
    return (
      <section className="huawei-part">
        <h2>HUAWEI</h2>
        <article>
          {this.phoneModel.map((phone) => (
            <Phone id={phone.model} key={phone.model} />
          ))}
        </article>
      </section>
    );
  }
}
export default HuaWeiPart;
