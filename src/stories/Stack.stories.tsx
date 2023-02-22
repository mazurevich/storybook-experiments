import { Stack, StackCard } from "#/ui/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";

const StackExample: FC = () => {
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(true);

  return (
    <Stack>
      {isFirstCardVisible && (
        <StackCard className="rounded-md border border-solid border-gray-900 bg-slate-500 p-4">
          Card 1
          <button
            className="block rounded-md border border-solid border-gray-900 bg-red-500 px-4 py-1"
            onClick={(e) => {
              e.stopPropagation();
              setIsFirstCardVisible(false);
            }}
          >
            Close
          </button>
        </StackCard>
      )}
      <StackCard className="h-40 rounded-md border border-solid bg-slate-500 p-4">
        Card 2
      </StackCard>
      <StackCard className="h-72 rounded-md border border-solid bg-slate-500 p-4">
        Card 3
      </StackCard>
    </Stack>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Stack",
  component: StackExample,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StackExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
