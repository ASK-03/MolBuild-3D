<!-- TODO: explore 3dmol.js and find ways to control one thing at a time 
            particularly the drag and drop functionality of the atoms -->
<!-- TODO: See graphite code and try to make a good UI using component -->

<script>
  // @ts-ignore
  import * as mol3d from "3dmol/build/3Dmol.js";
  import { onMount } from "svelte";

  let element, config, viewer;

  function func() {
    element = document.getElementById("container");
    config = { backgroundColor: "orange" };
    viewer = mol3d.createViewer(element, config);

    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 10, y: 1, z: 1 },
      radius: 1,
      color: "blue",
      quality: 5,
      clickable: true,
      callback: function (atom, viewer) {
        // viewer.render();
        console.log(atom);
        atom.color = "black";
        viewer.render();
      },
    });
    viewer.addSphere({
      center: { x: 1, y: 2, z: 5 },
      radius: 1,
      color: "blue",
      quality: 5,
      clickable: true,
      callback: function (atom, viewer) {
        // viewer.render();
        console.log(atom);
        atom.color = "black";
        atom.stylespec.center = { x: 10, y: 10, z: 10 };
        atom.stylespec.radius = 2;
        viewer.render();
        console.log(atom);
      },
    });
    viewer.zoomTo();
    viewer.zoom(0.8, 2000);
    viewer.render();

    console.log(viewer.glDOM.draggable);

    viewer.glDOM.ondragstart = () => {
      console.log("here");
    };

    // viewer.glDOM.draggable = true;
    // viewer.glDOM.ondrag = () => {
    //   console.log("dragging");
    // };

    console.log(viewer);
  }

  onMount(async () => func());
</script>

<div id="container"></div>

<!-- 
<button on:click={addSphere}> Add Sphere </button>
<button on:click={addCylinder}> Add Cylinder </button> 
-->

<style>
  #container {
    width: 40%;
    height: 40vh;
    background-color: antiquewhite;
  }
</style>
