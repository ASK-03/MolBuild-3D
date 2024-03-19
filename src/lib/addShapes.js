export function addSphere(viewer) {
  viewer.addSphere({
    center: { x: 1, y: 1, z: 0 },
    radius: 1.0,
    color: "green",
    quality: 5,
  });
  viewer.zoomTo();
  viewer.render();
  console.log(viewer);
}

export function addCylinder(viewer) {
  viewer.addCylinder({
    start: { x: 0, y: 0, z: 0 },
    end: { x: 10, y: 1, z: 1 },
    radius: 1,
    color: "blue",
    quality: 5,
  });
  viewer.zoomTo();
  viewer.render();
  console.log(viewer);
}
