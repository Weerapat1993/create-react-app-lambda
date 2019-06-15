import { specs } from 'storybook-addon-specifications'
import { mount } from "enzyme";

export const testsText = (story) => (
  specs(() => (
    describe('Hello World', () => {
      it('Should have the Hello World label', () => {
        let output = mount(story);
        expect(output.text()).toContain('Hello World');
      });
    })
  ))
)

export const testsEmoji = (story) => (
  specs(() => (
    describe('Hello World', () => {
      it('Should have the 😀 😎 👍 💯 label', () => {
        let output = mount(story);
        expect(output.text()).toContain('😀 😎 👍 💯');
      });
    })
  ))
)