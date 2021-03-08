import { mount } from 'enzyme';
import * as React from 'react';
import { MapContext } from '../context';
import * as MapboxGl from 'mapbox-gl';

// tslint:disable-next-line:no-any
export const getMapMock = (override?: { [key: string]: any }) =>
  ({
    addControl: jest.fn(),
    removeControl: jest.fn(),
    addSource: jest.fn(),
    removeSource: jest.fn(),
    addLayer: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
    setLayerZoomRange: jest.fn(),
    getLayer: jest.fn(),
    addImage: jest.fn(),
    loadImage: jest.fn(),
    removeImage: jest.fn(),
    resize: jest.fn(),
    getBounds: jest.fn(),
    getMaxBounds: jest.fn(),
    setMaxBounds: jest.fn(),
    getMinZoom: jest.fn(),
    setMinZoom: jest.fn(),
    getMaxZoom: jest.fn(),
    setMaxZoom: jest.fn(),
    getMinPitch: jest.fn(),
    setMinPitch: jest.fn(),
    getMaxPitch: jest.fn(),
    setMaxPitch: jest.fn(),
    hasImage: jest.fn(),
    getSource: jest.fn().mockReturnValue({ setData: jest.fn() }),
    project: jest.fn(),
    unproject: jest.fn(),
    ...override
  } as any);

// tslint:disable-next-line:no-any
export const mountWithMap = (comp: JSX.Element, mapValue: any) => {
  return mount(
    <MapContext.Provider value={mapValue}>{comp}</MapContext.Provider>
  );
};

export class MockComponent extends React.Component<{
  id: string;
  map: MapboxGl.Map;
}> {
  public render() {
    return <h1>{this.props.id}</h1>;
  }
}
