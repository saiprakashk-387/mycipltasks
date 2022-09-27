import React from "react";

import { Tree } from "react-tree-graph";
import "./Tree.css";

const ReactTree = () => {
  const dataa = {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                    {
                      name: 'Child 41'
                    },
                    {
                      name: 'Child 42'
                    },
                    {
                      name: 'Child 43'
                    }
                  ],
                name: "Child 14",
              },
              {
                children: [
                    {
                      name: 'Child 44'
                    },
                    {
                      name: 'Child 45'
                    },
                    {
                      name: 'Child 46'
                    }
                  ],
                name: "Child 15",
              },
              {
                children: [
                    {
                      name: 'Child 47'
                    },
                    {
                      name: 'Child 48'
                    },
                    {
                      name: 'Child 49'
                    }
                  ],
                name: "Child 16",
              },
            ],
            name: "Child 5",
          },
          {
            children: [
              {
                name: "Child 17",
              },
              {
                name: "Child 18",
              },
              {
                name: "Child 19",
              },
            ],
            name: "Child 6",
          },
          {
            children: [
              {
                name: "Child 20",
              },
              {
                name: "Child 21",
              },
              {
                name: "Child 22",
              },
            ],
            name: "Child 7",
          },
        ],
        name: "Child 2",
      },
      {
        children: [
          {
            children: [
              {
                name: "Child 23",
              },
              {
                name: "Child 24",
              },
              {
                name: "Child 25",
              },
            ],
            name: "Child 8",
          },
          {
            children: [
              {
                name: "Child 26",
              },
              {
                name: "Child 27",
              },
              {
                name: "Child 28",
              },
            ],
            name: "Child 9",
          },
          {
            children: [
              {
                name: "Child 29",
              },
              {
                name: "Child 30",
              },
              {
                name: "Child 31",
              },
            ],
            name: "Child 10",
          },
        ],
        name: "Child 3",
      },
      {
        children: [
          {
            children: [
              {
                name: "Child 32",
              },
              {
                name: "Child 33",
              },
              {
                name: "Child 34",
              },
            ],
            name: "Child 11",
          },
          {
            children: [
              {
                name: "Child 35",
              },
              {
                name: "Child 36",
              },
              {
                name: "Child 37",
              },
            ],
            name: "Child 12",
          },
          {
            children: [
              {
                name: "Child 38",
              },
              {
                name: "Child 39",
              },
              {
                name: "Child 40",
              },
            ],
            name: "Child 13",
          },
        ],
        name: "Child 4",
      },
    ],
    name: "Parent 1",
  };

  return (
    <div className="custom-container">
      <h4 style={{ color: "whitesmoke" }}>Users Tree view</h4>
      <Tree
        data={dataa}
        height={400}
        svgProps={{
          className: "custom",
        }}
        width={600}
      />
    </div>
  );
};

export default ReactTree;
