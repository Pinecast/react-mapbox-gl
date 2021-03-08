import * as React from 'react';
import * as MapboxGl from 'mapbox-gl';

export const MapContext = React.createContext(undefined) as React.Context<
  MapboxGl.Map | undefined
>;

export function withMap<T extends { map: MapboxGl.Map }>(
  Component: React.ComponentType<T>
): React.ComponentType<Omit<T, 'map'>> {
  return function MappedComponent(props: Omit<T, 'map'>) {
    return (
      <MapContext.Consumer>
        {/* tslint:disable-next-line:no-any */}
        {map => <Component {...props as any} map={map} />}
      </MapContext.Consumer>
    );
  };
}
