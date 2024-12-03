jest.mock('leaflet-geosearch', () => ({
  OpenStreetMapProvider: jest.fn(() => ({
    search: jest.fn().mockResolvedValue([{ label: 'Test location', x: 1, y: 2 }])
  }))
}));

jest.mock('react-leaflet', () => {
  function MapContainer({ children }: { children: React.ReactNode }): JSX.Element {
    return <div>{children}</div>;
  }
  function Marker(): JSX.Element {
    return <div>Marker</div>;
  }
  function TileLayer(): JSX.Element {
    return <div>TileLayer</div>;
  }
  function Circle(): JSX.Element {
    return <div>Circle</div>;
  }

  return {
    MapContainer,
    Marker,
    TileLayer,
    Circle
  };
});

jest.mock('react-leaflet-cluster', () => {
  function MarkerClusterGroup({ children }: { children: React.ReactNode }): JSX.Element {
    return <div>{children}</div>;
  }

  return {
    __esModule: true,
    default: MarkerClusterGroup
  };
});
