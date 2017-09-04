import React from "react";
import {expect} from 'chai';
import App from "../../src/client/App";
import {render} from "enzyme";

describe('init test', function () {
    it('should show hello world!', function () {
        let app = render(<App/>);
        expect(app.find('h2').text()).to.equal('Hello World!');
    });
});
