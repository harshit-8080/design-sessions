export interface IMessageDecorator {
  getContent(): string;
}

abstract class MessageDecorator implements IMessageDecorator {
  constructor(protected basemessage: IMessageDecorator) {}
  abstract getContent(): string;
}

type Reaction = {
  userId: string;
  emoji: string;
};

export class ReactionDecorator extends MessageDecorator {
  private reaction: Reaction[] = [];

  addReaction(userId: string, emoji: string) {
    const alreayExit = this.reaction.some((r) => {
      r.emoji == emoji && r.userId == userId;
    });

    if (!alreayExit) {
      this.reaction.push({ userId, emoji });
    }
  }

  removeReaction(userId: string, emoji: string) {
    this.reaction = this.reaction.filter((r) => {
      r.emoji != emoji && r.userId != userId;
    });
  }

  getReactionSummary() {
    let summary: Record<string, string[]> = {};

    for (const r of this.reaction) {
      if (!summary[r.emoji]) {
        summary[r.emoji] = [];
      }

      summary[r.emoji].push(r.userId);
    }

    // console.log(summary);
    const data = Object.entries(summary).map((reactions) => {
      return `${reactions[0]}:${reactions[1].length}`;
    });
    return data.join(" ");
  }

  getContent(): string {
    return this.basemessage.getContent() + this.getReactionSummary();

    // Hello, 👍:1 ❤️:2

    //  [
    //   { userId: 't7kkrkr4', emoji: '👍' },
    //   { userId: '2ft804m0', emoji: '❤️' },
    //   { userId: 't7kkrkr4', emoji: '❤️' }
    // ]
  }
}
