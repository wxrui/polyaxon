// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.87
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Environment;
import org.openapitools.client.model.V1Init;

/**
 * V1Dask
 */

public class V1Dask {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "dask";

  public static final String SERIALIZED_NAME_SCALE = "scale";
  @SerializedName(SERIALIZED_NAME_SCALE)
  private Integer scale;

  public static final String SERIALIZED_NAME_ADAPT_MIN = "adapt_min";
  @SerializedName(SERIALIZED_NAME_ADAPT_MIN)
  private Integer adaptMin;

  public static final String SERIALIZED_NAME_ADAPT_MAX = "adapt_max";
  @SerializedName(SERIALIZED_NAME_ADAPT_MAX)
  private Integer adaptMax;

  public static final String SERIALIZED_NAME_ADAPT_INTERVAL = "adapt_interval";
  @SerializedName(SERIALIZED_NAME_ADAPT_INTERVAL)
  private String adaptInterval;

  public static final String SERIALIZED_NAME_ENVIRONMENT = "environment";
  @SerializedName(SERIALIZED_NAME_ENVIRONMENT)
  private V1Environment environment;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections = null;

  public static final String SERIALIZED_NAME_VOLUMES = "volumes";
  @SerializedName(SERIALIZED_NAME_VOLUMES)
  private List<Object> volumes = null;

  public static final String SERIALIZED_NAME_INIT = "init";
  @SerializedName(SERIALIZED_NAME_INIT)
  private List<V1Init> init = null;

  public static final String SERIALIZED_NAME_SIDECARS = "sidecars";
  @SerializedName(SERIALIZED_NAME_SIDECARS)
  private List<Object> sidecars = null;

  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private Object container;


  public V1Dask kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1Dask scale(Integer scale) {
    
    this.scale = scale;
    return this;
  }

   /**
   * Get scale
   * @return scale
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getScale() {
    return scale;
  }


  public void setScale(Integer scale) {
    this.scale = scale;
  }


  public V1Dask adaptMin(Integer adaptMin) {
    
    this.adaptMin = adaptMin;
    return this;
  }

   /**
   * Get adaptMin
   * @return adaptMin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getAdaptMin() {
    return adaptMin;
  }


  public void setAdaptMin(Integer adaptMin) {
    this.adaptMin = adaptMin;
  }


  public V1Dask adaptMax(Integer adaptMax) {
    
    this.adaptMax = adaptMax;
    return this;
  }

   /**
   * Get adaptMax
   * @return adaptMax
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getAdaptMax() {
    return adaptMax;
  }


  public void setAdaptMax(Integer adaptMax) {
    this.adaptMax = adaptMax;
  }


  public V1Dask adaptInterval(String adaptInterval) {
    
    this.adaptInterval = adaptInterval;
    return this;
  }

   /**
   * Get adaptInterval
   * @return adaptInterval
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getAdaptInterval() {
    return adaptInterval;
  }


  public void setAdaptInterval(String adaptInterval) {
    this.adaptInterval = adaptInterval;
  }


  public V1Dask environment(V1Environment environment) {
    
    this.environment = environment;
    return this;
  }

   /**
   * Get environment
   * @return environment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Environment getEnvironment() {
    return environment;
  }


  public void setEnvironment(V1Environment environment) {
    this.environment = environment;
  }


  public V1Dask connections(List<String> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1Dask addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<String>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1Dask volumes(List<Object> volumes) {
    
    this.volumes = volumes;
    return this;
  }

  public V1Dask addVolumesItem(Object volumesItem) {
    if (this.volumes == null) {
      this.volumes = new ArrayList<Object>();
    }
    this.volumes.add(volumesItem);
    return this;
  }

   /**
   * Volumes is a list of volumes that can be mounted.
   * @return volumes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Volumes is a list of volumes that can be mounted.")

  public List<Object> getVolumes() {
    return volumes;
  }


  public void setVolumes(List<Object> volumes) {
    this.volumes = volumes;
  }


  public V1Dask init(List<V1Init> init) {
    
    this.init = init;
    return this;
  }

  public V1Dask addInitItem(V1Init initItem) {
    if (this.init == null) {
      this.init = new ArrayList<V1Init>();
    }
    this.init.add(initItem);
    return this;
  }

   /**
   * Get init
   * @return init
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Init> getInit() {
    return init;
  }


  public void setInit(List<V1Init> init) {
    this.init = init;
  }


  public V1Dask sidecars(List<Object> sidecars) {
    
    this.sidecars = sidecars;
    return this;
  }

  public V1Dask addSidecarsItem(Object sidecarsItem) {
    if (this.sidecars == null) {
      this.sidecars = new ArrayList<Object>();
    }
    this.sidecars.add(sidecarsItem);
    return this;
  }

   /**
   * Get sidecars
   * @return sidecars
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getSidecars() {
    return sidecars;
  }


  public void setSidecars(List<Object> sidecars) {
    this.sidecars = sidecars;
  }


  public V1Dask container(Object container) {
    
    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getContainer() {
    return container;
  }


  public void setContainer(Object container) {
    this.container = container;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Dask v1Dask = (V1Dask) o;
    return Objects.equals(this.kind, v1Dask.kind) &&
        Objects.equals(this.scale, v1Dask.scale) &&
        Objects.equals(this.adaptMin, v1Dask.adaptMin) &&
        Objects.equals(this.adaptMax, v1Dask.adaptMax) &&
        Objects.equals(this.adaptInterval, v1Dask.adaptInterval) &&
        Objects.equals(this.environment, v1Dask.environment) &&
        Objects.equals(this.connections, v1Dask.connections) &&
        Objects.equals(this.volumes, v1Dask.volumes) &&
        Objects.equals(this.init, v1Dask.init) &&
        Objects.equals(this.sidecars, v1Dask.sidecars) &&
        Objects.equals(this.container, v1Dask.container);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, scale, adaptMin, adaptMax, adaptInterval, environment, connections, volumes, init, sidecars, container);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Dask {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    scale: ").append(toIndentedString(scale)).append("\n");
    sb.append("    adaptMin: ").append(toIndentedString(adaptMin)).append("\n");
    sb.append("    adaptMax: ").append(toIndentedString(adaptMax)).append("\n");
    sb.append("    adaptInterval: ").append(toIndentedString(adaptInterval)).append("\n");
    sb.append("    environment: ").append(toIndentedString(environment)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    volumes: ").append(toIndentedString(volumes)).append("\n");
    sb.append("    init: ").append(toIndentedString(init)).append("\n");
    sb.append("    sidecars: ").append(toIndentedString(sidecars)).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

