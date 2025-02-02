import { Envelope } from "./primitives/envelope"
import { Polygon } from "./primitives/polygon"


export class World{
    constructor(graph, roadWidth = 100, roadRoundness = 13){
        this.graph = graph
        this.roadWidth = roadWidth
        this.roadRoundness = roadRoundness

        this.envelopes = []
        this.roadBorders = []

        this.generate()
    }

    generate() {
        this.envelopes.length = 0
        for (const seg of this.graph.segments) {
            this.envelopes.push(
                new Envelope(seg, this.roadWidth, this.roadRoundness)
            )
        }

        // this.intersections = Polygon.break(
        //     this.envelopes[0].poly,
        //     this.envelopes[1].poly,
        // )
        this.roadBorders = Polygon.union(this.envelopes.map((e) => e.poly))
        // Polygon.multiBreak(this.envelopes.map((e) => e.poly))
    }
    draw(ctx){
        for (const env of this.envelopes){
            env.draw(ctx, {fill: "#BBB", stroke: "#BBB", lineWidth: 15})
        }
        for (const seg of this.graph.segments){
            seg.draw(ctx, { color: " white", width: 4, dash: [10,10]})
        }
        // for (const int of this.intersections){
        //     int.draw(ctx, { color: 'red', size: 9})
        // }
        for (const seg of this.roadBorders){
            seg.draw(ctx, {color: "white", width: 4})
        }
    }
}